const express = require('express');
const router = express.Router();
const { authAdmin } = require('../../middleware/authAdmin');
const { authAd, registerAdmin, loginAdmin, getAllAdmin, deleteAdmin, logoutAdmin } = require('../../handler/adminHandler');

router.get('/admin/auth', authAdmin, authAd);
router.post('/admin/register', registerAdmin);
router.post('/admin/login', loginAdmin);
router.get('/admin/user-admin', getAllAdmin);
router.get('/admin/logout', authAdmin, logoutAdmin);
router.post('/admin/delete', deleteAdmin);

module.exports = router;
