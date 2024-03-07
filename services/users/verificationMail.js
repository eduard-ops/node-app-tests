const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const verificationMail = async (id) => {
  const data = await User.findByIdAndUpdate(id, {
      verify: true,
      verificationToken: null,
    }
  );
  return data;
};

module.exports = verificationMail;
