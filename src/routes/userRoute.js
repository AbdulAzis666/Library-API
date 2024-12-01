const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/:user_id', userController.updateUser);
module.exports = router;