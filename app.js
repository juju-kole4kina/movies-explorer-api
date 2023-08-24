require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const router = require('./routers/index');

const serverError = require('./middleware/serverError');
const limiter = require('./middleware/limiter');
const cors = require('./middleware/cors');
const {
  requestLogger,
  errorLogger,
} = require('./middleware/logger');

const { PORT, MONGODB_URL } = require('./utils/config');

const app = express();

app.use(cors);

mongoose.connect(MONGODB_URL, {});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());
app.use(limiter);
app.use(cookieParser());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(serverError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
