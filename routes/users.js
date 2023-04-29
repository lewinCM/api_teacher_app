const express = require('express');
const { registerCtrl, allUsers, UsersById, UpdateUser, DeleteUser } = require('../controllers/auth');
const { validatorRegister, validatorLogin, deleteUser } = require("../validators/auth");

const router = express.Router()

router.post("/auth/register", validatorRegister, registerCtrl)
router.get("/", allUsers)
router.get("/:id", validatorRegister, UsersById)
router.put("/:id", validatorRegister, UpdateUser)
router.delete("/:id", deleteUser, DeleteUser)
module.exports = router;

