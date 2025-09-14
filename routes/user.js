const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// GET all users
router.get('/', userController.getAllUsers);

// POST create user
router.post('/', userController.createuser);

// PUT update user
router.put('/:id', userController.updateuser);


module.exports = router;
