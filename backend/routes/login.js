const express = require('express');
const pool = require('../db');
const jwt = require('jsonwebtoken'); 
const { errorResponse, successResponse } = require('../models/jsonReturn');
const crypto = require('crypto');

const router = express.Router()
router.use(express.json())

const SECRET_KEY = crypto.randomBytes(32).toString('base64')

router.post('/login', async (req, res) => {
    const { email, senha } = req.body

    try {
        if (!email || !senha)
            return res.json(errorResponse('E-mail e senha são obrigatórios'))

        const query = `SELECT * FROM usuarios WHERE email = $1`
        const result = await pool.query(query, [email])
        if (result.rows.length === 0)
            return res.json(errorResponse('Usuário não encontrado'))

        const user = result.rows[0]
        if (user.senha !== senha)
            return res.json(errorResponse('Senha incorreta'))

        // Gerar um token JWT
        const token = jwt.sign({ id: user.id }, SECRET_KEY);

        return res.json(successResponse({ token, user }))
    } catch (err) {
        console.error('Erro ao processar a solicitação:', err)
        res.status(500).json({ message: 'Erro ao processar a solicitação' })
    }
})

module.exports = router;
