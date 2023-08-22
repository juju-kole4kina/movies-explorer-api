const express = require('express');
const mongoose = require('mongoose');

const { PORT, MONGODB_URL } = require('./utils/config');

// const router = require('./routers/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGODB_URL, {});

// app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
