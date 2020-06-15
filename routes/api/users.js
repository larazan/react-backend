const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const { authUs, registerUser, loginUser, getAllUser, deleteUser, logoutUser } = require('../..//handler/userHandler');

router.get('/users/auth', auth, authUs);
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.get('/users/user', getAllUser);
router.get('/users/logout', logoutUser);
router.post('/users/delete', deleteUser);

module.exports = router;