const { Schema, model } = require("mongoose");

const CourseSchema = Schema({
  title: { type: String, required: true, },
  courseImage: { type: String, required: false, },
  listImg: { type: String, required: false, },
  lesson: { type: String, required: false, },
  rating: { type: String, required: false, },
  teacherImg: { type: String, required: false, },
  teacherName: { type: String, required: true, },
  category: { type: String, required: true, },
  price: { type: String, required: true, },
  oldPrice: { type: String, required: true, },
}, {
  timestamps: true,
  versionKey: false,
})


module.exports = model('Course', CourseSchema)

