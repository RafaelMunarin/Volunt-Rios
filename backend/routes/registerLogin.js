// api de registro
const express = require('express');
const pool = require('../db'); // Corrigido para o caminho correto

const router = express.Router();
router.use(express.json());

// Rota de registro/login
router.post('/register-login', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        // Verifica se o email já existe
        const userResult = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

        if (userResult.rows.length > 0) {
            // Se o email já existe, faz login
            const user = userResult.rows[0];
            if (user.senha === senha) {
                // Retorne apenas os dados do usuário
                return res.json({ user });
            } else {
                return res.status(401).json({ message: 'Senha incorreta' }); // Mensagem para o front-end
            }
        } else {
            // Se o email não existe, realiza o registro
            const result = await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, senha]);
            // Retorne apenas os dados do usuário
            return res.json({ user: result.rows[0] });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao processar a solicitação' }); // Mensagem para o front-end
    }
});

module.exports = router;
