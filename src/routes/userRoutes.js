const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas de registro e login de usuário
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;