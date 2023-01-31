const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const userSignUpSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .pattern(emailRegexp)
    .required(),
});

const userLoginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .pattern(emailRegexp)
    .required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .pattern(emailRegexp)
    .required(),
});

const schemas = {
  userSignUpSchema,
  userLoginSchema,
  verifyEmailSchema,
};

module.exports = {
  User,
  schemas,
};
