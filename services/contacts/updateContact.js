const { Contact } = require("../../models");


const updateContact = async (id, body) => {
  const data = await Contact.findByIdAndUpdate(id, body, { new: true })
  return data;
};

module.exports = updateContact;
