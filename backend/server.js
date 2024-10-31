// backend/server.js
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const config = require('./config/config');
const register = require('./routes/register');
const login = require('./routes/login');
const logout = require('./routes/logout');
const event = require('./routes/event');
const { dataBaseSetup } = require('./util/databaseSetup');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS
const corsOptions = {
    origin: '*', 
    // credentials: true, 
};

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', register)
app.use('/api', login)
app.use('/api', logout)
app.use('/api', event)


// Conexão com o banco de dados
const sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password, {
    host: config.development.host,
    port: config.development.port,
    dialect: 'postgres',
});

async function connectDatabase() {
    try {
        // Tenta autenticar a conexão com o banco de dados
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.')

        await dataBaseSetup()
        console.log('Verificação e criação de tabelas concluída com sucesso.')
    } catch (err) {
        console.error('Não foi possível conectar ao banco de dados:', err)
        process.exit(1)
    }
}

app.listen(PORT, async () => {
    await connectDatabase();
    console.log(`Servidor rodando na porta ${PORT}`);
});
