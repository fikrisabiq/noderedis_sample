import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js';

import './services/cache.js';
import './model/Book.js';

const app = express();
app.use(bookRoute);
app.use(express.json());

mongoose.connect('mongodb://192.168.56.52:27017,192.168.56.53:27017/Books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
