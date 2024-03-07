const { Contact } = require("../../models");


const listContacts = async (id, skip, limit) => {
  const data = await 
    Contact.find({ owner: id }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id email")

  return data;
};

module.exports = listContacts;
