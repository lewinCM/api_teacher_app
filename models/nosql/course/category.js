const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
  title: { type: String, required: true, },
  estado: { type: Boolean, default: true, required: true, },
  usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true, }

}, {
  timestamps: true,
  versionKey: false,
})


module.exports = model('Category', CategorySchema)

