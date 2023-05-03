const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
// const propertiesKey = getProperties()
/**
 * Debes de pasar el objecto del usario
 * @param {*} user
 */
//firmando token
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );

  return sign
};

/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */

//verificando token
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET)
  } catch (e) {
    console.log(e);
    return null
  }
};

module.exports = { tokenSign, verifyToken };