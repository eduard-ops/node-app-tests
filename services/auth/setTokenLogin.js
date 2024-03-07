const { User } = require("../../models");

const setTokenLogin = async (id, token) => {
  await User.findByIdAndUpdate(id, { token });
};

module.exports = setTokenLogin;
