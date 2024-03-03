const { getContact } = require("../../services/contacts");

const { createError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "success", code: 200, data: result });
};

module.exports = getContactById;
