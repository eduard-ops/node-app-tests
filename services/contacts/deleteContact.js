const { Contact } = require("../../models");



const deleteContact = async (id) => {
  const data = await Contact.findByIdAndRemove(id);
  return data;
};

module.exports = deleteContact;
