const express = require('express')
const { loginCtl, registerCtl } = require('../controllers/auth')
const { CreateAdminUser, AdminUserById, AllAdminUsers, DeleteAdminUser, UpdateAdminUser } = require('../controllers/admin')
const { UpdateEstudiante, CreateEstudiante } = require('../controllers/estudiante')
const { CreateProfesor, UpdateProfesor } = require('../controllers/profesor')
const router = express.Router()



// register
router.post("/auth/register", registerCtl)
// login
router.post("/auth/login", loginCtl)


// admin
router.post("/", CreateAdminUser)
router.get("/", AllAdminUsers)
router.get("/:id", AdminUserById)
router.put("/:id", UpdateAdminUser)
router.delete("/:id", DeleteAdminUser)
// profesores
router.post("/", CreateProfesor,)
router.put("/:id", UpdateProfesor)

// alumnos
router.post("/", CreateEstudiante)
router.put("/:id", UpdateEstudiante)

module.exports = router;
