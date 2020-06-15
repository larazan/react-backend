const express = require('express');
const router = express.Router();
const { getAllBrand, addBrand, updateBrand, deleteBrand } = require('../../handler/brandHandler');

router.post('/product/brand', addBrand);
router.get('/product/brands', getAllBrand);
router.post('/product/brand-update', updateBrand);
router.post('/product/brand-delete', deleteBrand);

module.exports = router;
