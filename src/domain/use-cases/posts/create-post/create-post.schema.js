const Joi = require('joi');

const createPostSchema = Joi.object().keys({
  userId: Joi.number()
    .required(),

  tittle: Joi.string()
    .min(3)
    .max(30)
    .required(),

  body: Joi.string()
    .required(),
});

module.exports = {
  createPostSchema,
};
