const express = require('express');

const { PORT } = require('./utils/config');

// const router = require('./routers/index');

const app = express();

// app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
