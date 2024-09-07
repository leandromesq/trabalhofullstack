const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastro_pessoas', 'usuario', 'senha', {
  host: 'usuario',
  dialect: 'postgres'
});

module.exports = sequelize;