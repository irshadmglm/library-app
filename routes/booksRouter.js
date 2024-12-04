const express = require('express');
const bookController = require('../controller/bookController');
const router = express.Router();


// Get all books
router.get('/',bookController.getBooks );

// Add  book form
router.get('/add-book', bookController.addBookForm); 

// Add a new book
router.post('/add-book', bookController.addBook);

// Update a book form
router.get('/:id', bookController.updateBookForm );

// Update a book
router.put('/:id', bookController.updateBook );

// Delete a book
router.delete('/:id', bookController.deleteBook );

module.exports = router;
