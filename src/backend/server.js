const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pessoa } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota para criar uma pessoa
app.post('/pessoas', async (req, res) => {
  const { nome, cpf, telefone } = req.body;
  try {
    const pessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pessoa' });
  }
});

// Rota para listar todas as pessoas
app.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pessoas' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});