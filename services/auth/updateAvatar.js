const { User } = require("../../models/user");

const { tryCatchWrapper } = require("../../helpers");

const updateAvatar = async (id, avatarURL) => {
  const data = await tryCatchWrapper(User.findByIdAndUpdate(id, { avatarURL }));
  return data;
};

module.exports = updateAvatar;
