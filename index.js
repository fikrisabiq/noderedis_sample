// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js';

// require('./services/cache');
// require('./model/Book');

import './services/cache';
import './model/Book.js';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://192.168.56.52:27017,192.168.56.53:27017/Books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(bookRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
