const { Schema, model } = require("mongoose");
const Joi = require("joi");

const handleSchemaValidationErrors = require("../middlewares/handleSchemaValidationErrors");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    number: {
      type: String,
      unique: true,
      required: [true, "Set number for contact"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  number: Joi.string().required(),
});

contactSchema.post("save", handleSchemaValidationErrors);

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addContactSchema,
};
