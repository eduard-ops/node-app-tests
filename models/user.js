const { Schema, model } = require("mongoose");

const Joi = require("joi");

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

const joiSchema = Joi.object({
  email: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const joiSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .trim()
    .required()
    .valid("starter", "pro", "business"),
});

const joiSchemaVerifyEmail = Joi.object({
  email: Joi.string().trim().required(),
});

module.exports = {
  User,
  joiSchema,
  joiSubscriptionSchema,
  joiSchemaVerifyEmail,
};
