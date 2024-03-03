const { Contact } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const updateFavorite = async (id, { favorite }) => {
  const data = await tryCatchWrapper(
    Contact.findByIdAndUpdate(id, favorite, { new: true })
  );
  return data;
};

module.exports = updateFavorite;
