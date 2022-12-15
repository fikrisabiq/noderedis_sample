import express from 'express';
import {
  getInfo,
  getBooks,
  saveBook,
  deleteBook,
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/api/books', getBooks);
router.get('/api/info', getInfo);
router.post('/api/books', saveBook);
router.delete('/api/books', deleteBook);

export default router;
