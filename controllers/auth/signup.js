const { registerUser, checkUser } = require("../../services/auth");

const { createError, sendEmail, mailMessage } = require("../../helpers");

const { v4 } = require("uuid");

const bcrypt = require("bcryptjs");

const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await checkUser(email);
  if (user) {
    throw createError(409, `User with ${email} already exist`);
  }
  const verificationToken = v4();
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const result = await registerUser(
    email,
    hashPassword,
    avatarURL,
    verificationToken
  );
  const mail = mailMessage(email, verificationToken);
  await sendEmail(mail);
  res.status(201).json({
    message: "Created",
    status: 201,
    data: {
      user: {
        email: result.email,
        subscription: "starter",
        verificationToken,
      },
    },
  });
};

module.exports = signup;
