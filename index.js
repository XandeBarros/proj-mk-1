const express = require('express');
const apiRoutes = require('./routes/api.routes');

const app = express(); app.use(express.json()); // app.use(express.cors());

require('./config/db');

const SERVER_PORT = 3000;
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
  res.send('Home Page App da Academia')
});

app.listen(SERVER_PORT, () => {
  console.log(`Acessar http://localhost:${SERVER_PORT}`);
  console.log(`Servidor executando na porta ${SERVER_PORT}`);
});
