const express = require('express');
const { login, register, allUsers, UsersById, UpdateUser, DeleteUser } = require('../controllers/auth');
const { validatorRegister, validatorLogin, deleteUser } = require("../validators/auth");

const { validarjwt } = require('../middlewares/validar-jwt');
const { esAdminRole, tieneRole } = require('../middlewares/validated-role');


const router = express.Router()


router.get("/", allUsers)
router.get("/:id", UsersById)
router.put("/:id", validatorRegister, UpdateUser)

// ruta protegida
router.delete("/:id",
  validarjwt,
  esAdminRole,
  tieneRole('admin', 'profesor', 'user'),

  DeleteUser)



router.post("/auth/register", validatorRegister, register)
router.post("/auth/login", validatorLogin, login)





module.exports = router;

