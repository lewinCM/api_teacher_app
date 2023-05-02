const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
  title: { type: String, required: true, },

}, {
  timestamps: true,
  versionKey: false,
})


module.exports = model('Category', CategorySchema)

