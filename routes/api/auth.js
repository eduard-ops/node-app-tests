const express = require("express");

const router = express.Router();

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { auth: ctrl } = require("../../controllers");

const { joiSchema } = require("../../models/user");

router.post("/signup", validation(joiSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
