import Joi from "joi";

export default Joi.object().keys({
  id: Joi.alternatives(Joi.number, Joi.string).required(),
});
