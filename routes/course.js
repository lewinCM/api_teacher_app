const express = require('express');
const { createCourse } = require('../controllers/course');

const router = express.Router()

router.post("/",createCourse )
module.exports = router;