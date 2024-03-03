const getAll = require("./getAll");

const getContact = require("./getContact");

const createContact = require("./addContact");

const updateContactById = require("./updateContact");

const updateContactByFavoriteField = require("./updateFavorite");

const deleteContact = require("./deleteContact");

const filterFavoriteContacts = require("./filterFavoriteContacts");

module.exports = {
  getAll,
  getContact,
  createContact,
  updateContactById,
  updateContactByFavoriteField,
  deleteContact,
  filterFavoriteContacts,
};
