// backend/routes/logout.js
const express = require('express');
const { successResponse } = require('../models/jsonReturn')

const router = express.Router()

router.post('/logout', (req, res) => {
    
    return res.json(successResponse({ message: 'Logout realizado com sucesso' }))
})

module.exports = router;
