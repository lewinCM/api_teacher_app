const { Schema, model } = require("mongoose");

const ContactSchema = Schema({
  fullName: { type: String, required: true, },
  email: { type: String, required: true, },
  motivo: { type: String, required: true, },
  message: { type: String, required: true, },
}, {
  timestamps: true,
  versionKey: false,
})


module.exports = model('Contact', ContactSchema)

