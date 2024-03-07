const { User } = require("../../models/user");

const updateAvatar = async (id, avatarURL) => {
  const data = await User.findByIdAndUpdate(id, { avatarURL });
  return data;
};

module.exports = updateAvatar;
