
const { login } = require('../../controllers/auth')

const { User } = require('../../models')

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const {setTokenLogin} = require('../../services/auth');


jest.mock("../../models/user")

jest.mock('bcryptjs')

jest.mock('jsonwebtoken')

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

const mockToken = 'mockToken';


const userMock = {
    _id: "1",  
    email: "test1@list.com", 
    password: "hashTestpassword", 
    verify: true,
  }

describe('test login user', () => { 
    test("should throw error if password is wrong", async () => {
        let err;
        User.findOne.mockResolvedValueOnce(userMock)
        bcrypt.compareSync.mockReturnValue(false)
        await login(request, response).catch(e => err = e)
        expect(err.status).toBe(401)
        expect(err.message).toBe("Email is wrong or not verify, or password is wrong")
})

    test("should throw error if user not found", async () => {
        let err;
        User.findOne.mockResolvedValueOnce(undefined)
        await login(request, response).catch(e => err = e)
        expect(err.status).toBe(401)
        expect(err.message).toBe("Email is wrong or not verify, or password is wrong")
})


    test("should return seccess user login" , async () => {
    User.findOne.mockResolvedValueOnce(userMock)
    bcrypt.compareSync.mockReturnValue(true)
    jwt.sign.mockReturnValue(mockToken);
    User.findByIdAndUpdate.mockResolvedValueOnce(userMock._id, mockToken)
     await login(request, response)
     expect(User.findByIdAndUpdate).toHaveBeenCalledWith(userMock._id, {token:  mockToken})
     expect(response.status).toHaveBeenCalledWith(200)
     expect(response.json).toHaveBeenCalledWith({
        message: "Success",
        data: {
           token: mockToken
        }
     })
})


})



