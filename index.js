const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./services/cache');
require('./model/Book');

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require('./routes/bookRoute')(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
