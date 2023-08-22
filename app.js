const express = require('express');

const { PORT } = require('./utils/config');

const app = express();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
