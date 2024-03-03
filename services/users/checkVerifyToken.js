const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const checkVerifyToken = async (verificationToken) => {
  const data = await tryCatchWrapper(User.findOne({ verificationToken }));
  return data;
};

module.exports = checkVerifyToken;
