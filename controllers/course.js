const { courseModel } = require("../models")

const createCourse = async (req, res) => {
  const { body } = req
  const Course = courseModel
  const course = new Course(body)

  const data = await course.save()
  res.json({ ok: true, data })
}

const AllCourse = async (req, res) => {
  const { body } = req
  const Course = await courseModel.find({})
  res.json({ ok: true, Course })
}

const CourseById = async (req, res) => {
  const id = req.params.id
  const Course = await courseModel.findById(id)
  res.json({ ok: true, Course })
}
const UpdateCourse = async (req, res) => {
  const id = req.params.id
  const Course = await courseModel.findByIdAndUpdate(id)
  res.json({ ok: true, Course })
}

const DeleteCourse = async (req, res) => {
  const id = req.params.id
  const Course = await courseModel.findByIdAndDelete(id)
  res.json({ ok: true, Course })
}

module.exports = {
  createCourse,
  AllCourse,
  CourseById,
  UpdateCourse,
  DeleteCourse,
}
