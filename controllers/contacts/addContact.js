const { createContact } = require("../../services/contacts");

const addContact = async (req, res) => {
  const { _id } = req.user;
  const { body } = req;
  const result = await createContact(body, _id);
  res.status(201).json({ message: "created", code: 201, data: result });
};

module.exports = addContact;
