const { Contact } = require("../../models/contact");
const createError = require("http-errors");

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const { name, number } = req.body;
  const candidate = Contact.findOne({ number, owner: _id });
  if (candidate) {
    throw createError(
      409,
      `Contact with number ${number} is already in your contact book`
    );
  }
  const data = await Contact.create({ name, number, owner: _id });
  res.status(201).send(data);
};

module.exports = addContact;
