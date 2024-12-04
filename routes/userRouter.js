const express = require('express');
const router = express.Router();
const User = require('../helper/userHelper');
const userController = require('../controller/userController');

// Get all users
router.get('/', userController.getUser );

// Add  user form
router.get('/add-user',userController.addUserForm);

// Add a new user
router.post('/add-user',userController.addUser);

// Update a user
router.put('/:id', userController.apdateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
