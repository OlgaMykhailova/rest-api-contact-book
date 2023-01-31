const express = require("express");

const { auth, isValidId, validation, ctrlWrapper } = require("../middlewares");
const { addContactSchema } = require("../models/contact");

const { contacts: ctrl } = require("../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.post(
  "/",
  auth,
  validation(addContactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", auth, isValidId, ctrlWrapper(ctrl.removeContact));


module.exports = router;
