const { categoryModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

const createCategory = async (req, res) => {
  try {

    const { body } = req
    const Category = categoryModel
    const category = new Category(body)

    const data = await category.save()
    res.json({ ok: true, data })
  } catch (error) {

    handleHttpError(res, 'Hubo un error en enviar su mensaje')


  }

}





const allCategory = async (req, res) => {
  try {
    const data = await categoryModel.find({})
    res.json({ ok: true, data })
  } catch (error) {
    handleHttpError(res, 'Hubo un error en enviar su mensaje')
  }

}

const CategoryById = async (req, res) => {
  try {
    const id = req.params.id

    const data = await categoryModel.findById(id)
    res.json({ ok: true, data })
  } catch (error) {
    handleHttpError(res, 'Hubo un error en enviar su mensaje')
  }

}

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id
    const data = await categoryModel.findByIdAndUpdate(id)
    res.json({ ok: true, data })
  } catch (error) {
    handleHttpError(res, 'Hubo un error en enviar su mensaje')
  }

}

const deleteCategory = async (req, res) => {
  try {
    res.json({ ok: true })
  } catch (error) {
    handleHttpError(res, 'Hubo un error en enviar su mensaje')
  }

}
module.exports = { createCategory, allCategory, CategoryById, updateCategory, deleteCategory }
