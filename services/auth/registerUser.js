const { User } = require("../../models");


const registerUser = async (email, password, avatarURL, verificationToken) => {
  const result = await User.create({
      email,
      password,
      avatarURL,
      verificationToken,
    })
  return result;
};

module.exports = registerUser;
