const jwt = require("jsonwebtoken")

const validarJwt = async (req, res, next) => {
  const token = req.header('x-token')

  if (!token) {
    res.status(401).json({
      msg: 'no tienes acceso a este metodo'
    })
  }


  try {
    jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    console.log(error);
    res.status(401).send('token no es valido')
  }
}



module.exports = { validarJwt } 