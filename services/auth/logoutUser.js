const { User } = require("../../models");



const logoutUser = async (id) => {
 return await User.findByIdAndUpdate(id, { token: null });
};

module.exports = logoutUser;
