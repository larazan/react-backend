const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { authAdmin } = require('../../middleware/authAdmin');
const { getAllGender, addGender, updateGender, deleteGender } = require('../../handler/genderHandler');

router.post('/product/gender', addGender);
router.get('/product/genders', getAllGender);
router.post('/product/gender-update', updateGender);
router.post('/product/gender-delete', authAdmin, deleteGender);

module.exports = router;
