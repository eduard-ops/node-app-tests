const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const checkUser = async (email) => {
  const user = await tryCatchWrapper(User.findOne({ email }));
  if (user) return user ?? true;
  return false;
};

module.exports = checkUser;
