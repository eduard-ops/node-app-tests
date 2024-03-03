const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const setTokenLogin = async (id, token) => {
  await tryCatchWrapper(User.findByIdAndUpdate(id, { token }));
};

module.exports = setTokenLogin;
