const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { authAdmin } = require('../../middleware/authAdmin');
const { admin } = require('../../middleware/admin');
const { getAllCategory, addCategory, updateCategory, deleteCategory } = require('../../handler/categoryHandler');

router.post('/product/category', addCategory);
router.get('/product/categories', getAllCategory);
router.post('/product/category-update', updateCategory);
router.post('/product/category-delete', deleteCategory);

module.exports = router;
