const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { getAllOrder, addOrder, updateOrder, deleteOrder } = require('../../handler/orderHandler');

router.post('/purchase/order', addOrder);
router.get('/purchase/orders', getAllOrder);
router.post('/purchase/order-update', updateOrder);
router.post('/purchase/order-delete', auth, deleteOrder);

module.exports = router;
