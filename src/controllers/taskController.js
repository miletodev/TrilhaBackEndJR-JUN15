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
  
  module.exports = taskController;  