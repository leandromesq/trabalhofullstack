const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastro_pessoas', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;