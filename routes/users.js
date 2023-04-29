const express = require('express');
const { registerCtrl, allUsers, UsersById, UpdateUser, DeleteUser } = require('../controllers/auth');
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { check } = require('express-validator');
const router = express.Router()

router.post("/auth/register", validatorRegister, registerCtrl)
router.get("/", allUsers)
router.get("/:id", UsersById)
router.put("/:id", [check('id', 'no es un id valido').isMongoId()], UpdateUser)
router.delete("/:id", DeleteUser)
module.exports = router;

