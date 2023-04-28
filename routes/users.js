const express = require('express');
const { registerCtrl, allUsers, UsersById, UpdateUser, DeleteUser } = require('../controllers/auth');
const { validatorRegister, validatorLogin } = require("../validators/auth");
const router = express.Router()

router.post("/auth/register", validatorRegister, registerCtrl)
router.get("/", allUsers)
// router.get("/:id", UsersById)
// router.put("/:id", UpdateUser)
// router.delete("/:id", DeleteUser)
module.exports = router;

