const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { authAdmin } = require('../../middleware/authAdmin');
const { getAllProduct, getProduct, searchProduct, addProduct, updateProduct, productById, softDelete, deleteProduct } = require('../..//handler/productHandler');

router.get('/product/product-list', getAllProduct);
router.post('/product/shop', getProduct);
router.get('/product/articles', searchProduct);
router.get('/product/articles_by_id', productById);
router.post('/product/article', auth, admin, addProduct);
router.post('/product/article-update', authAdmin, updateProduct);
router.post('/product/article-delete', authAdmin, deleteProduct);
router.post('/product/article-softdelete', softDelete);

module.exports = router;
