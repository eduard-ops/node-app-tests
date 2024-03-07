const { User } = require("../../models");


const checkUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

module.exports = checkUserById;
