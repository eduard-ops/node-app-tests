const { logoutUser } = require("../../services/auth");

const logout = async (req, res) => {
  const { _id } = req.user;
  await logoutUser(_id);
  res.status(204).json();
};

module.exports = logout;
