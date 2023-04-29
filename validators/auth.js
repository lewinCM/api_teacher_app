const { check } = require("express-validator");
const validateResults = require("../middlewares/handleValidator");
const { RolValidate, emailExiste } = require("../utils/handleDbValidators");


const validatorRegister = [

  check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 }),

  check("password")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  check("rol").custom(RolValidate),

  check("email", "El correo no es valido").custom(emailExiste),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];
const deleteUser = [
  check("id", 'el id no existe').isMongoId().custom(emailExiste),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorLogin = [
  check("password")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  check("email")
    .exists()
    .notEmpty()
    .isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

module.exports = { validatorRegister, validatorLogin, deleteUser };