const express = require('express');
const pool = require('../db');
const jwt = require('jsonwebtoken');
const { errorResponse, successResponse } = require('../models/jsonReturn');
const crypto = require('crypto');

const router = express.Router()
router.use(express.json())

const SECRET_KEY = crypto.randomBytes(32).toString('base64')

router.post('/register', async (req, res) => {
    const { nome, cpf, dtNascimento, email, contato, senha } = req.body

    if (!dtNascimento || dtNascimento.trim() === "") {
        return res.json(errorResponse('Data de nascimento não foi informada'))
    }

    try {
        const userResult = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email])
        if (userResult.rows.length > 0) {
            return res.json(errorResponse('Email já cadastrado.'))
        } else {
            const result = await pool.query(
                'INSERT INTO usuarios (nome, cpf, dtNascimento, email, contato, senha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [nome, cpf, dtNascimento, email, contato, senha]
            );

            const token = jwt.sign({ id: result.rows[0].id }, SECRET_KEY);

            return res.json(successResponse({ token, user: result.rows[0] }));
        }
    } catch (err) {
        console.error('Erro ao processar a solicitação:', err)
        res.status(500).json({ message: 'Erro ao processar a solicitação' })
    }
});

module.exports = router;