const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./services/cache');
require('./models/Book');

const app = express();
app.use(bookRoute);
app.use(bodyParser.json());

mongoose.connect('mongodb://192.168.56.52:27017,192.168.56.53:27017/Books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
