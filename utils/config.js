const {
  PORT = 3000,
  MONGODB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

const ALLOWED_CORS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://api.movie-exp.kole4kina.nomoredomainsicu.ru',
  'https://api.movie-exp.kole4kina.nomoredomainsicu.ru',
  'http://movie-exp.kole4kina.nomoredomainsicu.ru',
  'https://movie-exp.kole4kina.nomoredomainsicu.ru',
];

module.exports = {
  PORT,
  MONGODB_URL,
  NODE_ENV,
  JWT_SECRET,
  ALLOWED_CORS,
};
