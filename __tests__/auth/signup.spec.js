
const { signup } = require('../../controllers/auth')

const bcrypt = require("bcryptjs");

const { User } = require('../../models');

const gravatar = require('gravatar');

const { v4: uuidv4 } = require('uuid');

const { sendEmail,  mailMessage } = require('../../helpers');
const { use } = require('express/lib/application');


const request = {
    body: {
        email: "test1@list.com",
        password: "testpassword" 
    }
}

const response = {
    status: jest.fn((x) => x),
    json:  jest.fn((x) => x)
}


jest.mock("../../models/user")

jest.mock('uuid');

jest.mock('bcryptjs')

jest.mock('gravatar')


jest.mock("../../helpers/sendEmail")
jest.mock('../../helpers/mailMessage')

const userMock = {
  _id: "1",  
  email: "test1@list.com", 
  password: "hashTestpassword", 
  verify: true,
  subscription: "starter", 
  avatarURL: "testAvatarURL",
  token: "testToken",
  verificationToken: "testid",
}

const messageMock = {
  to: userMock.email,
  subject: "Подтверждение email",
  html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${userMock.verificationToken}">Подтвердить email</a>`,
};

describe("test signup user", () => {
  test("should throw error user already exist", async () => {
    let err;
    User.findOne.mockResolvedValueOnce(userMock)
    await signup(request, response).catch(e => err = e)
    expect(err.message).toBe(`User with ${request.body.email} already exist`)
 })

 test("should create user to database and and status 201" , async () => {
     User.findOne.mockImplementationOnce(undefined)
     bcrypt.hashSync.mockReturnValue(userMock.password)
     uuidv4.mockReturnValue(userMock.verificationToken)
     gravatar.url.mockReturnValue(userMock.avatarURL)
 
     User.create.mockResolvedValueOnce({
      email: userMock.email,
      password: userMock.password,
      verificationToken: userMock.verificationToken,
      avatarURL: userMock.avatarURL
     })
     
     const mockMailMessage = jest.fn(() => messageMock)
     const mockSendEmail = jest.fn();
 
     mailMessage.mockImplementation(mockMailMessage);
     sendEmail.mockImplementation(mockSendEmail);
     await signup(request, response);
    

     expect(User.create).toHaveBeenCalledWith({
      email: userMock.email,
      password: userMock.password,
      verificationToken: userMock.verificationToken,
      avatarURL: userMock.avatarURL
     })

     expect(mailMessage).toHaveBeenCalledWith(userMock.email, userMock.verificationToken)
     expect(sendEmail).toHaveBeenCalledWith(messageMock)
     expect(sendEmail).toHaveBeenCalledTimes(1)
     expect(response.status).toHaveBeenCalledWith(201)
     expect(response.json).toHaveBeenCalledWith({
         message: "Created",
         data: {
           user: {
             email: userMock.email,
             subscription: userMock.subscription,
             verificationToken: userMock.verificationToken,
           },
         },
       })
 })
})
