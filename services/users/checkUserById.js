const { User } = require("../../models");
const { tryCatchWrapper } = require("../../helpers");

const checkUserById = async (id) => {
  const user = await tryCatchWrapper(User.findById(id));
  return user;
};

module.exports = checkUserById;
