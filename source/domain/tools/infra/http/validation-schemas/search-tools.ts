import Joi from "joi";

export default Joi.object().keys({
  valor: Joi.string().required(),
});
