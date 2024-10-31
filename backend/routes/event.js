const express = require('express');
const pool = require('../db'); // Certifique-se de que está apontando para sua configuração de banco de dados
const { errorResponse, successResponse } = require('../models/jsonReturn');

const router = express.Router();
router.use(express.json());

// Rota para cadastrar um novo evento
router.post('/register-event', async (req, res) => {
    console.log('req.body', req.body)

    if (!req.body)
        return res.json(errorResponse('Requsição vazia'))

    const {
        tituloEvento,
        descricaoEvento,
        dataEvento,
        tipoEvento,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        responsavel,
        telefone,
        email,
    } = req.body;

    // Validações
    if (!tituloEvento || !dataEvento || !cep || !responsavel) {
        return res.json(errorResponse('Todos os campos são obrigatórios.'));
    }

    try {
        const result = await pool.query(
            `INSERT INTO eventos (
                titulo, descricao, data, tipo_evento,
                cep, rua, numero, bairro, cidade, estado,
                responsavel, telefone_responsavel, email_responsavel
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
            RETURNING *`,
            [
                tituloEvento,
                descricaoEvento,
                dataEvento,
                tipoEvento,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                responsavel,
                telefone,
                email,
            ]
        );

        return res.json(successResponse(result.rows[0])); // Retorna o evento cadastrado
    } catch (err) {
        console.error('Erro ao cadastrar evento:', err);
        return res.status(500).json(errorResponse('Erro ao cadastrar evento'));
    }
});

// Rota para consultar eventos
router.get('/search-event', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM eventos ORDER BY data ASC');
        return res.json(successResponse(result.rows)); // Retorna todos os eventos
    } catch (err) {
        console.error('Erro ao buscar eventos:', err);
        return res.status(500).json(errorResponse('Erro ao buscar eventos'));
    }
});

module.exports = router;
