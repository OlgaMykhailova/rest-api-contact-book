const { Contact } = require("../../models/contact");
const createError = require("http-errors");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const data = await Contact.findOneAndRemove({_id: contactId, owner: _id});
  if (!data) {
    throw createError(404, `Contact with id ${contactId} not found`);
  }
  res.send(data)
};

module.exports = removeContact;
