const { Contact } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const listContacts = async (id, skip, limit) => {
  const data = await tryCatchWrapper(
    Contact.find({ owner: id }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id email")
  );
  return data;
};

module.exports = listContacts;
