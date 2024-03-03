const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const registerUser = async (email, password, avatarURL, verificationToken) => {
  const result = await tryCatchWrapper(
    User.create({
      email,
      password,
      avatarURL,
      verificationToken,
    })
  );
  return result;
};

module.exports = registerUser;
