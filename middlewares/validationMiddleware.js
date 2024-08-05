const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
