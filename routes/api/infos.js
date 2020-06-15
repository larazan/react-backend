const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { getAllInfos, addInfos, updateInfos, deleteInfos, softDeleteInfos } = require('../../handler/infosHandler');

router.get('/product/infos', getAllInfos);
router.post('/product/info', auth, admin, addInfos);
router.post('/product/infos-update', auth, updateInfos);
router.post('/product/infos-delete', deleteInfos);
router.post('/product/infos-softdelete', softDeleteInfos);

module.exports = router;
