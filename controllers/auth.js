const { matchedData } = require("express-validator")
const { userModel } = require("../models")
const { encrypt, compare } = require("../middlewares/handlePassword")
const { tokenSign } = require("../middlewares/handleJwt")
const { handleHttpError } = require("../utils/handleError")
const bcryptjs = require('bcryptjs')

const register = async (req, res) => {
  try {
    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = { ...req, password }
    const dataUser = await userModel.create(body)
    // metodo para evitar que el password salga en consola en el req
    dataUser.set("password", undefined, { strict: false })

    res.send({
      token: await tokenSign(dataUser),
      user: dataUser
    })
  } catch (error) {
    handleHttpError(res, 'Error en el registro del user')
  }
}

// regresar todos los user insertado en la data
const allUsers = async (req, res) => {
  try {
    // con paginacion
    const { limite = 1, desde = 0 } = req.query
    const query = { estado: true }
    // numero total de registro
    const [total, users] = await Promise.all([
      userModel.countDocuments(query),
      userModel.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])
    res.json({ total, users })



  } catch (error) {
    res.status(400).send(error)
  }
}
const UsersById = async (req, res) => {
  try {
    const id = req.params.id
    const User = await userModel.findById(id)
    res.json({ msg: 'Este es el user con su id', User })
  } catch (error) {
    handleHttpError(res, 'Hubo un problema en recuperar todos los users')
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
    handleHttpError(res, 'Hubo un problema en actualizar el user')

  }

}
const DeleteUser = async (req, res) => {
  try {
    const id = req.params.id

    // eliminacion fisica
    const deleteUser = await userModel.findByIdAndDelete(id)

    // eliminancion logica
    // const deleteUser = await userModel.findOneAndUpdate(id, { estado: false })


    // res.json({ msg: `el user con el id ${id} fue eliminado`, deleteUser })
    res.json({ msg: `el user con el id ${id} fue eliminado`, deleteUser })
  } catch (error) {
    handleHttpError(res, 'Hubo un problema en la eliminacion del user')

  }
}


// login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    // Verificar si el email existe
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'user / Password no son correctos - email'
      });
    }

    // SI el user está activo
    if (!user.estado) {
      return res.status(400).json({
        msg: 'user / Password no son correctos - estado: false'
      });
    }

    // Verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'user / Password no son correctos - password'
      });
    }

    // Generar el JWT
    const token = await generarJWT(user.id);

    res.json({
      user,
      token
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }

}


module.exports = {
  register,
  login,
  allUsers,
  UsersById,
  UpdateUser,
  DeleteUser,
}
