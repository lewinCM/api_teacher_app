const { contactModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

const sendContact = async (req, res) => {
  try {

    const { body } = req
    const Contact = contactModel
    const contact = new Contact(body)

    const data = await contact.save()
    res.json({ ok: true, data })
  } catch (error) {

    handleHttpError(res, 'Hubo un error en enviar su mensaje')


  }

}


module.exports = { sendContact }
