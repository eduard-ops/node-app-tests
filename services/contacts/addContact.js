const { Contact } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const addContact = async (body, id) => {
  const data = await tryCatchWrapper(Contact.create({ ...body, owner: id }));
  return data;
};

module.exports = addContact;
