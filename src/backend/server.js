const express = require('express');
const bodyParser = require('body-parser');
const pessoaRoutes = require('./routes/pessoaRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());
app.use('/api', pessoaRoutes);

sequelize.sync().then(() => {
  console.log('Database synchronized');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});