const { Contact } = require("../../models/contact");

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const { name, number } = req.body;
  const newContact = await Contact.create({ name, number, owner: _id });
  res.status(201).send(newContact);
};

module.exports = addContact;
