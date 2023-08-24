const { ALLOWED_CORS } = require('../utils/config');

const cors = (req, res, next) => {
  const { origin } = req.headers;

  if (ALLOWED_CORS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin); // позволяет составить белый список заголовков сервера, к которым браузерам разрешен доступ.
    res.headers('Access-Control-Allow-Credentials', true); // Указывает, может ли фактический запрос быть сделан с использованием учетных данных.
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // используется в ответ на предполетный запрос , чтобы указать, какие заголовки HTTP можно использовать при выполнении фактического запроса.
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // указывает метод или методы, разрешенные при доступе к ресурсу. Используется в ответ на предполетный запрос

  next();
};

module.exports = cors;
