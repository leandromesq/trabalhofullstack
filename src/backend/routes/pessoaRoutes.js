const express = require('express');
const { createPessoa, getPessoas } = require('../controllers/pessoaController');
const router = express.Router();

router.post('/pessoas', createPessoa);
router.get('/pessoas', getPessoas);

module.exports = router;