const { Contact } = require("../../models");

const updateFavorite = async (id, { favorite }) => {
  const data = await Contact.findByIdAndUpdate(id, favorite, { new: true })

  return data;
};

module.exports = updateFavorite;
