import Joi from "joi";

export default Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
  link: Joi.string(),
  tags: Joi.array().max(8).items(Joi.string()),
});
