const express = require('express');
const pool = require('../db');  // Conexão com o banco de dados
const { errorResponse, successResponse } = require('../models/jsonReturn');  // Utilizando o padrão de resposta

const router = express.Router();
router.use(express.json());

// Rota para pegar as informações do usuário
router.get('/user/:id', async (req, res) => {
    const { id } = req.params;  // Recebendo o ID do usuário da URL
    console.log(id)
    try {
        console.log(`Requisição GET para /user/${id}`);  // Para depuração
        // Consultando o usuário no banco de dados
        const userQuery = 'SELECT * FROM usuarios WHERE id = $1';
        const userResult = await pool.query(userQuery, [id]);

        // Se o usuário não for encontrado
        if (userResult.rows.length === 0) {
            return res.status(404).json(errorResponse('Usuário não encontrado.'));
        }

        // Retornando os dados do usuário
        return res.status(200).json(successResponse(userResult.rows[0], 'Usuário encontrado.'));
    } catch (err) {
        console.error('Erro ao obter usuário:', err);
        return res.status(500).json(errorResponse('Erro interno ao obter as informações do usuário.'));
    }
});

// Rota para editar as informações do usuário
router.put('/user/:id', async (req, res) => {
    const { id } = req.params;  // Recebendo o ID do usuário da URL
    const { nome, cpf, cnpj, dtNascimento, email, contato, senha } = req.body;  // Dados que serão alterados

    // Validação para garantir que os campos obrigatórios foram enviados
    if (!nome || !cpf || !cnpj || !email) {
        return res.status(400).json(errorResponse('Todos os campos são obrigatórios.'));
    }

    try {
        // Verificando se o usuário existe
        const userQuery = 'SELECT * FROM usuarios WHERE id = $1';
        const userResult = await pool.query(userQuery, [id]);

        // Se o usuário não for encontrado
        if (userResult.rows.length === 0) {
            return res.status(404).json(errorResponse('Usuário não encontrado.'));
        }

        // Atualizando as informações do usuário
        const updateQuery = `
            UPDATE usuarios
            SET nome = $1, cpf = $2, cnpj = $3, dtNascimento = $4, email = $5, contato = $6
            WHERE id = $7
            RETURNING *;
        `;

        const updatedUser = await pool.query(updateQuery, [
            nome, cpf, cnpj, dtNascimento, email, contato, senha, id
        ]);

        // Retornando o usuário atualizado
        return res.status(200).json(successResponse(updatedUser.rows[0], 'Usuário atualizado com sucesso.'));
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err);
        return res.status(500).json(errorResponse('Erro interno ao atualizar o usuário.'));
    }
});

module.exports = router;
