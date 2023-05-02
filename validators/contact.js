const { check } = require("express-validator");
const validateResults = require("../middlewares/handleValidator");


const contactValidate = [
  check("fullName", "Este campo es obligatorio").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("email", "Este campo es obligatorio").exists().notEmpty().isEmail(),
  check("message", "Este campo es obligatorio").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("motivo", "Este campo es obligatorio").exists().notEmpty().isLength({ min: 3, max: 30 }),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];


module.exports = { contactValidate };