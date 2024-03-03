const mailMessage = (email, verificationToken) => {
  const message = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердить email</a>`,
  };
  return message;
};

module.exports = mailMessage;
