const { Schema, model } = require("mongoose");

const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

const joiSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  phone: Joi.string().trim().required(),
  favorite: Joi.bool(),
});

const Contact = model("contact", contactSchema);

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema,
};
