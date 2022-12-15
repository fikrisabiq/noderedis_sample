import express from 'express';
import {
  getInfo,
  getBooks,
  saveBook,
  deleteBook,
  generateData,
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/api/books', getBooks);
router.get('/api/info', getInfo);
router.get('/api/generate', generateData);
router.post('/api/books', saveBook);
router.delete('/api/books', deleteBook);

module.exports = {
  router,
};
