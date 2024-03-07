const { Contact } = require("../../models");



const addContact = async (body, id) => {
  const data = await Contact.create({ ...body, owner: id });
  return data;
};

module.exports = addContact;
