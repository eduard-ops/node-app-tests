const { User } = require("../../models");



const checkVerifyToken = async (verificationToken) => {
  const data = await User.findOne({ verificationToken });
  return data;
};

module.exports = checkVerifyToken;
