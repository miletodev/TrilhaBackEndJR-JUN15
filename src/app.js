const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env 

const app = express(); // Inicializa o express

// Middlewares globais
app.use(cors()); // Habilita o CORS
app.use(morgan('dev')); // Logger de requisições HTTP
app.use(bodyParser.json()); // Habilita o body-parser para JSON
app.use(bodyParser.urlencoded({ extended: true })); // Habilita o body-parser para URL encoded

// Rotas
app.use('/api/tasks', taskRouter); // Rota para as tarefas
app.use('/api/users', userRouter); // Rota para autenticação de usuários

// Tratamento de erros 404
app.use((req, res) => {
    res.status(404).json({ message: 'Rota não encontrada!' });
});

// Conecção com o banco de dados
require('./database');

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});