const taskController = {
    createTask: (req, res) => {
      res.send('Criar uma nova tarefa');
    },
    getAllTasks: (req, res) => {
      res.send('Listar todas as tarefas');
    },
    updateTask: (req, res) => {
      res.send(`Atualizar tarefa com ID ${req.params.id}`);
    },
    deleteTask: (req, res) => {
      res.send(`Deletar tarefa com ID ${req.params.id}`);
    },
  };

  const taskModel = require('../models/taskModel');

  const taskController = {
    createTask: (req, res) => {
      const task = req.body;
      taskModel.create(task, (err) => {
        if (err) {
          return res.status(500).send('Erro ao criar tarefa');
        }
        return res.status(201).json('Tarefa criada com sucesso', id: result.id);
      });
    },

    getAllTasks: (req, res) => {
      taskModel.getAll((err, tasks) => {
        if (err) {
          return res.status(500).send('Erro ao buscar tarefas');
        }
        return res.status(200).json(tasks);
      });
    }

    updateTask: (req, res) => {
      const { id } = req.params;
      const updatedTask = req.body;
      taskModel.update(id, updatedTask, (err, result) => {
        if (err) {
          return res.status(500).send('Erro ao atualizar tarefa');
        }
        return res.status(200).json('Tarefa atualizada com sucesso', result);
    });
    },

    deleteTask: (req, res) => {
      const id - req.params.id;
      taskModel.delete(id, (err, result) => {
        if (err) {
          return res.status(500).send('Erro ao deletar tarefa');
        }
        return res.status(200).json('Tarefa deletada com sucesso');
      });
    }
  };
  
  module.exports = taskController;  