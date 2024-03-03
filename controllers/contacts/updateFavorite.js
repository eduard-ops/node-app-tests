const updateContactByFavoriteField = require("../../services/contacts");

const { createError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await updateContactByFavoriteField(contactId, favorite);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "updated", code: 200, data: { result } });
};

module.exports = updateFavorite;
