// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/taskRoutes');
const userRouter = require('./routes/userRoutes');

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env 

const app = express(); // Inicializa o express

// Middlewares globais
app.use(cors()); // Habilita o CORS
app.use(morgan('dev')); // Logger de requisições HTTP
app.use(bodyParser.json()); // Habilita o body-parser para JSON
app.use(bodyParser.urlencoded({ extended: true })); // Habilita o body-parser para URL encoded

// Rotas
app.use('/api', taskRouter);
app.use('/api', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});