const express = require('express');
const { sendContact } = require('../controllers/contact');
const { contactValidate } = require('../validators/contact');

const router = express.Router()

router.post("/", contactValidate, sendContact)
module.exports = router;