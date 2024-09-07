const Pessoa = require('../models/pessoa');

exports.createPessoa = async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    const pessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};