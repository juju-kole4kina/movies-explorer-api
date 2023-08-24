const {
  PORT = 3000,
  MONGODB_URL = 'mongodb://localhost:27017/bitfilmsdb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

const ALLOWED_CORS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://api.koltsova.diploma.movie-explorer.nomoredomainsicu.ru',
  'https://api.koltsova.diploma.movie-explorer.nomoredomainsicu.ru',
  'http://koltsova.diploma.movie-explorer.nomoredomainsicu.ru',
  'https://koltsova.diploma.movie-explorer.nomoredomainsicu.ru',
];

module.exports = {
  PORT,
  MONGODB_URL,
  NODE_ENV,
  JWT_SECRET,
  ALLOWED_CORS,
};
