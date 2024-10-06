// backend/server.js
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const config = require('./config/config');
const registerLoginRoutes = require('./routes/registerLogin'); // Importando as rotas

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Permitir o frontend rodando neste endereço
    credentials: true, // Se precisar enviar cookies ou autenticação
};

app.use(cors(corsOptions)); // Usando o middleware cors
app.use(express.json());
app.use('/api', registerLoginRoutes); // Usando as rotas

// Conexão com o banco de dados
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    port: config.development.port,
    dialect: 'postgres',
});

// Testar a conexão
async function connectDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (err) {
        console.error('Não foi possível conectar ao banco de dados:', err);
        process.exit(1); // Encerra o processo em caso de erro
    }
}

app.listen(PORT, async () => {
    await connectDatabase();
    console.log(`Servidor rodando na porta ${PORT}`);
});
