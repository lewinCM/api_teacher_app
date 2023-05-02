const express = require('express');
const { login, register, allUsers, UsersById, UpdateUser, DeleteUser } = require('../controllers/auth');
const { validatorRegister, validatorLogin, deleteUser } = require("../validators/auth");
const { validarJwt } = require('../validators/validated-jwt');
const { isAdmin, isRoles } = require('../middlewares/validated-role');

const router = express.Router()


router.get("/", allUsers)
router.get("/:id", UsersById)
router.put("/:id", validatorRegister, UpdateUser)
router.delete("/:id",
  validarJwt,
  isRoles('admin', 'user', 'profesor'),
  deleteUser,
  DeleteUser)



router.post("/auth/register", validatorRegister, register)
router.post("/auth/login", validatorLogin, login)





module.exports = router;

