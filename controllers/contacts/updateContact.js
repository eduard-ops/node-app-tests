const { updateContactById } = require("../../services/contacts");

const { createError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContactById(contactId, req.body);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 201, data: result });
};

module.exports = updateContact;
