const { userModel } = require("../models")
const bcryptjs = require("bcryptjs")
const { emailExiste } = require("../utils/handleDbValidators")
const { matchedData } = require("express-validator")


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
  try {
    // con paginacion
    const { limite = 1, desde = 0 } = req.query
    const Users = await userModel.find()
      .skip(Number(desde))
      .limit(Number(limite))
    // retorno del numero total de registro

    res.json({ ok: true, Users })
  } catch (error) {
    res.status(400).send(error)
  }
}
const UsersById = async (req, res) => {
  try {
    const id = req.params.id
    const User = await userModel.findById(id)
    res.json({ ok: true, User })
  } catch (error) {
    res.status(400).send(error)
  }
}

const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { password, google, ...resto } = req.body;

    if (password) {
      const salt = bcryptjs.genSaltSync()
      resto.password = bcryptjs.hashSync(password, salt)
    }
    const user = await userModel.findOneAndUpdate(
      id, resto
    );
    res.send({ msg: 'los datos se han actualizados correctamente', id, user });
  } catch (e) {
    console.log(e);
    res.send({ error: e })
    // handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }

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
