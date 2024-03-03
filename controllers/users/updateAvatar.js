const path = require("path");

const fs = require("fs/promises");

const { setAvatar } = require("../../services/auth");

const avatarDir = path.join(__dirname, "../../", "public/avatars");

const Jimp = require("jimp");

const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    const [extension] = originalname.split(".").reverse();
    const newName = `${_id}.${extension}`;
    const uploadPath = path.join(avatarDir, newName);
    Jimp.read(tempPath, (err, img) => {
      if (err) throw err;
      img.resize(250, 250).write(uploadPath);
    });
    await fs.rename(tempPath, uploadPath);
    const avatarURL = path.join("avatars", newName);
    await setAvatar(_id, avatarURL);
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
