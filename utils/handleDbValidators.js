const { roleModel, userModel } = require("../models");


const RolValidate = async (rol = '') => {
  const exitsRol = await roleModel.findOne({ rol });
  if (!exitsRol) {
    throw new Error(` el rol ${rol} esta en la data`);
  }

}

const emailExiste = async (email = '') => {
  const existeEmail = await userModel.findOne({ email })
  if (existeEmail) {
    throw new Error(`el email ${email}  ya existe`);
  }
}

module.exports = {
  RolValidate,
  emailExiste
}