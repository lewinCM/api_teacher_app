const isAdmin = (req, res, next) => {

  if (!req.user) {
    return res.status(500).send("no tienes permiso para realizar esta accion");

  }
  const { rol, name } = req.user
  if (rol !== 'admin') {
    return res.status(500).send('necesitas permisos como admin para realizar esta accion')

  }


  return next();
}

const isRoles = (...roles) => {
  return (req, res, next) => {
    console.log(roles);

    next()
  }

}
module.exports = { isAdmin, isRoles }