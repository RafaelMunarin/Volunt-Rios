const pool = require('../db');

const dataBaseSetup = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                cpf VARCHAR(11) UNIQUE NOT NULL,
                cnpj VARCHAR(14) UNIQUE NOT NULL,
                dtNascimento DATE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                contato VARCHAR(15),
                senha VARCHAR(255) NOT NULL
            );
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS eventos (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                descricao TEXT,
                data DATE NOT NULL,
                tipo_evento VARCHAR(50), 
                cep VARCHAR(10),
                rua VARCHAR(255),
                numero VARCHAR(10),
                bairro VARCHAR(100),
                cidade VARCHAR(100),
                estado VARCHAR(50),
                responsavel VARCHAR(150),
                telefone_responsavel VARCHAR(20),
                email_responsavel VARCHAR(255)
            );
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS candidaturas (
                id SERIAL PRIMARY KEY,
                usuario_id INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
                evento_id INT NOT NULL REFERENCES eventos(id) ON DELETE CASCADE,
                data_candidatura TIMESTAMP DEFAULT NOW(),
                UNIQUE (usuario_id, evento_id)
            );
        `);

        console.log('Verificação e criação de tabelas concluída com sucesso.')
    } catch (err) {
        console.error('Erro ao verificar/criar tabelas:', err)
        throw err
    }
}

module.exports = { dataBaseSetup };
