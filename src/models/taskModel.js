const db = require('../database/database');

// Criação de tabela de tarefas caso não exista
db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL,
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id))`);

    const taskModel = {
        // Função para criar nova tarefa
        create: (task, callback) => {
            return db.run(
                `INSERT INTO tasks (title, description, status, userId)
                VALUES (?, ?, ?, ?)`,
                [task.title, task.description, task.status, task.userId],
                function (err) {
                    if (err) {
                        return callback(err);
                    }
                    return callback(null, { id: this.lastID }); // Retorna o ID da tarefa criada
                }
            );
        }        

        // Função para listar todas as tarefas
        list: (callback) => {
            return db.all(`SELECT * FROM tasks`, (err, rows) => {
                if (err) {
                    return callback(err);
                }
                return callback(rows);
            });
        },

        // Função para atualizar tarefa
        update: (id, updatedTask, callback) => {
            const { title, description, status } = updatedTask;
            const query = `UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?`;
            db.run(query, [title, description, status, id], function (err) { 
                if (err) {
                    return callback(err);
                } else {
                    callback(null, { changes: this.changes });
                }
            });
        }
        

        // Função para deletar tarefa
        delete: (id, callback) => {
            return db.run(`DELETE FROM tasks WHERE id = ?`, [id], (err) => {
                if (err) {
                    return callback(err);
                }
                return callback(null);
            });
        }
    };

        module.exports = taskModel;