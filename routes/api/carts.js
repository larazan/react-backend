const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { getAllCart, addCart, updateCart, deleteCart } = require('../../handler/cartHandler');

router.post('/cart/basket', addCart);
router.get('/cart/baskets', getAllCart);
router.post('/cart/basket-update', updateCart);
router.post('/cart/basket-delete', auth, deleteCart);

module.exports = router;
