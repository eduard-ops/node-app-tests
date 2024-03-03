const { Contact } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const deleteContact = async (id) => {
  const data = await tryCatchWrapper(Contact.findByIdAndRemove(id));
  return data;
};

module.exports = deleteContact;
