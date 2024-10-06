const db = require('../database/database');

// Criação de tabela de usuários caso não exista
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`);   

const userModel = {
    // Função para criar novo usuário
    create: (user, callback) => {
        const { username, password } = user;
        const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
        return db.run(query, [username, password], (err) => {
            if (err) {
                return callback(err);
            } else { 
                callback(null, { id: this.lastID });
            }
        });
    },

    // Retornar usuário pelo username
    findByUsername: (username, callback) => {
        const query = `SELECT * FROM users WHERE username = ?`;
        db.get(query, [username], (err, row) => {
            if (err) {
                callback(err);
            } else {
                callback(null, row);
            }
        });
    }
};

module.exports = userModel;