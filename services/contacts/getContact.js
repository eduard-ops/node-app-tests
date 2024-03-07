const { Contact } = require("../../models");


const getContact = async (id) => {
  const data = await Contact.findById(id);
  return data;
};

module.exports = getContact;
