const express = require('express');
const { createCategory, allCategory, CategoryById, updateCategory, deleteCategory } = require('../controllers/category');
const router = express.Router()

router.post("/", createCategory)
router.get("/", allCategory)
router.get("/:id", CategoryById)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)
module.exports = router;