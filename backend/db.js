const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'bdVoluntaRios',
  password: '1234',
  port: 5432, 
});

// Testar a conexão
pool.connect()
  .then(() => console.log('Conexão ao banco de dados estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = pool;
