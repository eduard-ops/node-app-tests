const { createError, sendEmail, mailMessage } = require("../../helpers");

const { checkVerifyUser } = require("../../services/users");

const againSendVerify = async (req, res) => {
  const { email } = req.body;

  const data = await checkVerifyUser(email);

  const { verify, verificationToken } = data;
  if (verify) {
    throw createError(400, "Verification has already been passed");
  }

  const mail = mailMessage(email, verificationToken);
  await sendEmail(mail);
  res.json({ message: "Verification email sent" });
};

module.exports = againSendVerify;
