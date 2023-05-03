const jwt = require("jsonwebtoken");
const { userModel } = require("../models");

const validarjwt = async (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        // leer el usuario que corresponde al uid
        const usuario = await userModel.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }
        // Verificar si el uid tiene estado true
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }
        req.usuario = usuario;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}
module.exports = { validarjwt }