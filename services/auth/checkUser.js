const { User } = require("../../models");

const checkUser = async (email) => {
  const user = await User.findOne({ email });
  if (user) return user ?? true;
  return false;
};

module.exports = checkUser;
