const { Contact } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const updateContact = async (id, body) => {
  const data = await tryCatchWrapper(
    Contact.findByIdAndUpdate(id, body, { new: true })
  );
  return data;
};

module.exports = updateContact;
