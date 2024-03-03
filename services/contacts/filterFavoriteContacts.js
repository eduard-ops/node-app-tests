const { Contact } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const filterFavoriteContacts = async (id, favorite) => {
  const data = await tryCatchWrapper(
    Contact.find({ owner: id, favorite }, "", {}).populate("owner", "_id email")
  );
  return data;
};

module.exports = filterFavoriteContacts;
