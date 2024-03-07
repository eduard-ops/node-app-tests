const {logout} = require("../../controllers/auth")
const { User } = require("../../models")
const { logoutUser } = require("../../services/auth")


jest.mock('../../services/auth/logoutUser', () => jest.fn(() => request.user._id));

const request = {
    user: {
        _id: "1"
    }
}

const response = {
    status: jest.fn((x) => x),
    json:  jest.fn((x) => x)
}

test("should return empty json and status 204", async () => {
    await logout(request, response);
    expect(logoutUser).toHaveBeenCalledWith(request.user._id);
    expect(logoutUser).toHaveBeenCalledTimes(1)
    expect(response.status).toHaveBeenCalledWith(204)
    expect(response.json).toHaveBeenCalledWith({})
})