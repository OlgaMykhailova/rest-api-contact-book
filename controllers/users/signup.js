const createError = require("http-errors");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const { PORT = 4000 } = process.env;

const { User } = require("../../models/user");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, "Email in use");
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });

  res.status(201).json({
    user: {
      email: newUser.email,
      mame: newUser.name,
    },
  });
};

module.exports = signup;
