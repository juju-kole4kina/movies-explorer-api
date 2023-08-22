const { PORT = 3000, MONGODB_URL = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;

module.exports = {
  PORT,
  MONGODB_URL,
};
