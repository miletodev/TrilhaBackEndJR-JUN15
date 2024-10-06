const userController = {
    registerUser: (req, res) => {
      res.send('Registrar novo usuário');
    },
    loginUser: (req, res) => {
      res.send('Login de usuário');
    },
  };
  
  module.exports = userController;  