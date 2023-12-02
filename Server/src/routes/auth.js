const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/verify',userController.isLoggedIn)
module.exports = router;
