const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { authAdmin } = require('../../middleware/authAdmin');
const { getAllSection, addSection, updateSection, deleteSection } = require('../../handler/sectionHandler');

router.post('/product/section', addSection);
router.get('/product/sections', getAllSection);
router.post('/product/section-update', authAdmin, updateSection);
router.post('/product/section-delete', deleteSection);

module.exports = router;
