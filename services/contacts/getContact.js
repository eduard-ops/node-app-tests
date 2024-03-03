const { Contact } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const getContact = async (id) => {
  const data = await tryCatchWrapper(Contact.findById(id));
  return data;
};

module.exports = getContact;
