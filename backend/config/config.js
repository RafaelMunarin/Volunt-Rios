// backend/config/config.js
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME || !DB_PORT) {
  throw new Error('Por favor, defina todas as variáveis de ambiente do banco de dados.');
}

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};
