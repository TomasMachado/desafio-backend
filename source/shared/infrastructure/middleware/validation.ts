export const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(422).send(error.details[0].message);
  } else {
    next();
  }
};

export const validateQueryParams = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.query);
  if (error) {
    res.status(422).send(error.details[0].message);
  } else {
    next();
  }
};
