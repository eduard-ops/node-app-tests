const { checkVerifyToken, verificationMail } = require("../../services/users");

const { createError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await checkVerifyToken(verificationToken);

  if (!user) {
    throw createError(404);
  }
  await verificationMail(user._id, verificationToken);
  res.json({
    message: "Verification successful",
  });
};

module.exports = verifyEmail;
