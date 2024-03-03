const { getAll, filterFavoriteContacts } = require("../../services/contacts");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = favorite
    ? await filterFavoriteContacts(_id, favorite)
    : await getAll(_id, skip, limit);
  res.json({ message: "success", code: 200, data: result });
};

module.exports = listContacts;
