const { User } = require("../../models");



const checkVerifyUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

module.exports = checkVerifyUser;
