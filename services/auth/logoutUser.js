const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const logoutUser = async (id) => {
  await tryCatchWrapper(User.findByIdAndUpdate(id, { token: null }));
};

module.exports = logoutUser;
