const { Contact } = require("../../models/contact");

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const { name, number } = req.body;
  const data = await Contact.create({ name, number, owner: _id });
  res.status(201).send(data);
};

module.exports = addContact;
