const userModel = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  registerUser: (req, res) => {
    const { username, password } = req.body; // Extrai username e password do corpo da requisição

    // Verifica se o usuário já existe
    userModel.findByUsername(username, (err, user) => { // Corrigido o parêntese
      if (user) {
        return res.status(409).send('Usuário já existe');
      }
      // Se o usuário não existir, criptografa a senha e cria um novo usuário
      const saltRounds = 8;
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: 'Erro ao criptografar a senha' });
        }
        const newUser = { username, password: hash };
        // Cria um novo usuário
        userModel.create(newUser, (err, result) => {
          if (err) {
            res.status(500).json({ error: 'Erro ao registrar usuário' });
          } else {
            res.status(201).json({ message: 'Usuário registrado com sucesso', id: result.id });
          }
        });
      });
    });
  },

  loginUser: (req, res) => {
    const { username, password } = req.body; // Extrai username e password do corpo da requisição
    // Verifica se o usuário já existe
    userModel.findByUsername(username, (err, user) => {
      if (!user) {
        return res.status(400).json('Usuário não encontrado');
      }

      // Compara a senha informada com a senha criptografada no banco de dados
      bcrypt.compare(password, user.password, (err, match) => { // Corrigido 'result' para 'match'
        if (err || !match) {
          return res.status(401).json('Senha incorreta');
        }
        // Gera um token de autenticação JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Corrigido o sinal de igual

        res.status(200).json({ message: 'Login realizado com sucesso', token });
      });
    });
  }
};

module.exports = userController;