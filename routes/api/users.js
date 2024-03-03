const express = require("express");

const router = express.Router();

const { auth, ctrlWrapper, validation, upload } = require("../../middlewares");

const {
  joiSubscriptionSchema,
  joiSchemaVerifyEmail,
} = require("../../models/user");

const { users: ctrl } = require("../../controllers");

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "",
  auth,
  validation(joiSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post(
  "/verify",
  validation(joiSchemaVerifyEmail),
  ctrlWrapper(ctrl.againSendVerify)
);

module.exports = router;
