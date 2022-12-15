const mongoose = require('mongoose');
const Book = mongoose.model('Book');
import { router } from 'express';
import {
  getInfo,
  getBooks,
  saveBook,
  deleteBook
} from ('../controllers/bookController')

const router = express.Router();

router.get('/api/books', getBooks);
router.get('/api/info', getInfo)
router.post('/api/books', saveBook);
router.delete('/api/books', deleteBook);
