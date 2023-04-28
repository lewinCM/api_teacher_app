const { userModel } = require("../models")
const bcryptjs = require("bcryptjs")
const { emailExiste } = require("../utils/handleDbValidators")


const registerCtrl = async (req, res) => {
  const { name, email, password, rol } = req.body
  const User = userModel
  const user = new User({ name, email, password, rol })

  // encriptar contraseña
  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync(password, salt)

  // guardar 
  const data = await user.save()
  res.json({ ok: true, data })
}

// regresar todos los user insertado en la data
const allUsers = async (req, res) => {
  const { body } = req
  const User = await userModel.find({})
  res.json({ ok: true, User })
}
const UsersById = async (req, res) => {
  const id = req.params.id
  const User = await userModel.findById(id)
  res.json({ ok: true, User })
}
const UpdateUser = async (req, res) => {
  const id = req.params.id
  const User = await userModel.findByIdAndUpdate(id)
  res.json({ ok: true, User })
}
const DeleteUser = async (req, res) => {
  const id = req.params.id
  const User = await userModel.findByIdAndDelete(id)
  res.json({ ok: true, User })
}

module.exports = {
  registerCtrl,
  allUsers,
  UsersById,
  UpdateUser,
  DeleteUser,
}
