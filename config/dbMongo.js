
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    })
    console.log('base de dato conectada');


  } catch (error) {
    console.log(error);
    throw new Error('algo salio mal,ponerse en contacto con soporte'); 
  }
}

module.exports = {
  dbConnect
}