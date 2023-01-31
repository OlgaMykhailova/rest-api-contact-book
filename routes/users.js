const express = require("express");

const { auth, validation, ctrlWrapper } = require("../middlewares");
const { users: ctrl } = require("../controllers");
const { schemas } = require("../models/user");

const router = express.Router();

router.post(
  "/signup",
  validation(schemas.userSignUpSchema),
  ctrlWrapper(ctrl.signup)
);


router.post(
  "/login",
  validation(schemas.userLoginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", auth, ctrlWrapper(ctrl.getCurrentUser));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;