const express = require('express');

const { getInfo } = require('../controllers/bookController.js');
const { getBooks } = require('../controllers/bookController.js');
const { saveBook } = require('../controllers/bookController.js');
const { deleteBook } = require('../controllers/bookController.js');
const { generateData } = require('../controllers/bookController.js');

const router = express.Router();

router.get('/api/books', getBooks);
router.get('/api/info', getInfo);
router.get('/api/generate', generateData);
router.post('/api/books', saveBook);
router.delete('/api/books', deleteBook);

module.exports = {
  router,
};
