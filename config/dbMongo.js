
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('base de dato conectada');


  } catch (error) {
    console.log(error);//lo mira solo el admin
    throw new Error('algo salio mal,ponerse en contacto con soporte'); //hace que no se carge la app
  }
}

module.exports = {
  dbConnect
}