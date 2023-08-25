const BAD_REQUEST_ERROR_CODE = 400;
const UNAUTHORIZATION_ERROR_CODE = 401;
const FORBITTEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;
const CONFLICT_ERROR_CODE = 409;
const INTERNAL_SERVER_ERROR_CODE = 500;
const DUPLICATE_KEY_ERROR_CODE = 11000;

const VALIDATION_ERROR_NAME = 'ValidationError';
const CASTOM_ERROR_NAME = 'CastError';

const BAD_REQUEST_ERROR_MESSAGE = 'Пеереданы некорректные данные';
const UNAUTHORIZATION_ERROR_MESSAGE = 'Необходима авторизация';
const FORBITTEN_ERROR_MESSAGE = 'У Вас нет прав для выполнения данных действий';
const NOT_FOUND_ERROR_MESSAGE = 'Переданные данные не найдены';
const CONFLICT_ERROR_MESSAGE = 'Данные уже существуют';
const INTERNAL_SERVER_ERROR_CODE_MESSAGE = 'Ошибка на сервере';

const ALLOWED_CORS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://api.movie-exp.kole4kina.nomoredomainsicu.ru',
  'https://api.movie-exp.kole4kina.nomoredomainsicu.ru',
  'http://movie-exp.kole4kina.nomoredomainsicu.ru',
  'https://movie-exp.kole4kina.nomoredomainsicu.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZATION_ERROR_CODE,
  FORBITTEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  INTERNAL_SERVER_ERROR_CODE,
  DUPLICATE_KEY_ERROR_CODE,
  VALIDATION_ERROR_NAME,
  CASTOM_ERROR_NAME,
  BAD_REQUEST_ERROR_MESSAGE,
  UNAUTHORIZATION_ERROR_MESSAGE,
  FORBITTEN_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  INTERNAL_SERVER_ERROR_CODE_MESSAGE,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
