const jwt = require('jsonwebtoken');

// Middleware para verificar o token enviado pelo usuário e decodificá-lo. 
// Se o token for inválido, retorna um erro 401.
// Se o token for válido, adiciona o ID do usuário na requisição e chama a próxima função.

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Token não informado');
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
        return res.status(401).send('Token inválido');
        }
    
        req.userId = decoded.id; // Adiciona o ID do usuário na requisição
        next(); // Continua para a rota protegida
    });
}

module.exports = authMiddleware;