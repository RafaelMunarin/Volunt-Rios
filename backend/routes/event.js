const express = require('express');
const pool = require('../db'); 
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

router.post('/apply-event', async (req, res) => {
    const { usuarioId, eventoId } = req.body;

    // Validação dos campos obrigatórios
    if (!usuarioId || !eventoId) {
        return res.json(errorResponse('Os campos usuarioId e eventoId são obrigatórios.'));
    }

    try {
        // Verificar se o usuário já está cadastrado no evento
        const existingCandidacy = await pool.query(
            'SELECT * FROM candidaturas WHERE usuario_id = $1 AND evento_id = $2',
            [usuarioId, eventoId]
        );

        if (existingCandidacy.rows.length > 0) {
            return res.json(errorResponse('Você já se candidatou para este evento.'));
        }

        const result = await pool.query(
            'INSERT INTO candidaturas (usuario_id, evento_id) VALUES ($1, $2) RETURNING *',
            [usuarioId, eventoId]
        );

        return res.json(successResponse({ candidatura: result.rows[0] }));
    } catch (error) {
        console.error('Erro ao processar candidatura:', error);
        return res.status(500).json(errorResponse('Erro ao processar a candidatura.'));
    }
});

// Rota para buscar eventos nos quais o usuário está cadastrado
router.get('/user-events/:usuarioId', async (req, res) => {
    const { usuarioId } = req.params;

    if (!usuarioId) {
        return res.json(errorResponse('O campo usuarioId é obrigatório.'));
    }

    try {
        const result = await pool.query(
            `SELECT e.*
             FROM eventos e
             INNER JOIN candidaturas c ON e.id = c.evento_id
             WHERE c.usuario_id = $1
             ORDER BY e.data ASC`,
            [usuarioId]
        );

        if (result.rows.length === 0) {
            return res.json(successResponse([], 'Nenhum evento encontrado.'));
        }

        return res.json(successResponse(result.rows));
    } catch (error) {
        console.error('Erro ao buscar eventos do usuário:', error);
        return res.status(500).json(errorResponse('Erro ao buscar eventos do usuário.'));
    }
});

// Rota para cancelar candidatura
router.delete('/cancel-candidacy', async (req, res) => {
    const { usuarioId, eventoId } = req.body;

    if (!usuarioId || !eventoId) {
        return res.json(errorResponse('Os campos usuarioId e eventoId são obrigatórios.'));
    }

    try {
        // Verificar se a candidatura existe
        const existingCandidacy = await pool.query(
            'SELECT * FROM candidaturas WHERE usuario_id = $1 AND evento_id = $2',
            [usuarioId, eventoId]
        );

        if (existingCandidacy.rows.length === 0) {
            return res.json(errorResponse('Nenhuma candidatura encontrada para este evento.'));
        }

        // Remover a candidatura
        await pool.query('DELETE FROM candidaturas WHERE usuario_id = $1 AND evento_id = $2', [
            usuarioId,
            eventoId,
        ]);

        return res.json(successResponse({}, 'Candidatura cancelada com sucesso.'));
    } catch (error) {
        console.error('Erro ao cancelar candidatura:', error);
        return res.status(500).json(errorResponse('Erro ao cancelar a candidatura.'));
    }
});

module.exports = router;
