const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const checkVerifyUser = async (email) => {
  const user = await tryCatchWrapper(User.findOne({ email }));
  return user;
};

module.exports = checkVerifyUser;
