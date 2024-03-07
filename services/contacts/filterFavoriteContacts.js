const { Contact } = require("../../models");

const filterFavoriteContacts = async (id, favorite) => {
  const data = await 
    Contact.find({ owner: id, favorite }, "", {}).populate("owner", "_id email")
  
  return data;
};

module.exports = filterFavoriteContacts;
