const { courseModel } = require("../models")

const createCourse = async (req, res) => {
  const { body } = req
  const Course = courseModel
  const course = new Course(body)

  const data = await course.save()
  res.json({ ok: true, data })
}

module.exports = {
  createCourse
}
