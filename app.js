require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const router = require('./routers/index');
const { PORT, MONGODB_URL } = require('./utils/config');

const app = express();

mongoose.connect(MONGODB_URL, {});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
