# Gerenciador de Tarefas API (Desafio Código Certo Coders)

Uma API RESTful para gerenciar tarefas, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar) para tarefas e autenticação de usuários.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para construir APIs.
- **SQLite**: Banco de dados leve e fácil de usar.
- **JWT (JSON Web Token)**: Para autenticação de usuários.
- **bcrypt**: Para criptografia de senhas.

## Funcionalidades

- **Autenticação de Usuários**
  - Registro de novos usuários.
  - Login de usuários com geração de token JWT.
- **Gerenciamento de Tarefas**
  - Criação de novas tarefas.
  - Listagem de todas as tarefas.
  - Atualização de tarefas existentes.
  - Deleção de tarefas.

### Autenticação

- `POST /api/register`
  - Registro de um novo usuário.
  - Body: 
    ```json
    {
      "username": "nome_de_usuario",
      "password": "senha"
    }
    ```

- `POST /api/login`
  - Login do usuário.
  - Body: 
    ```json
    {
      "username": "nome_de_usuario",
      "password": "senha"
    }
    ```

### Gerenciamento de Tarefas

- `POST /api/tarefas`
  - Criação de uma nova tarefa.
  - Body: 
    ```json
    {
      "title": "Título da tarefa",
      "description": "Descrição da tarefa",
      "status": "status da tarefa",
      "userId": 1 // ID do usuário
    }
    ```

- `GET /api/tarefas`
  - Listar todas as tarefas (requer autenticação).

- `PUT /api/tarefas/:id`
  - Atualização de uma tarefa existente.
  - Body: 
    ```json
    {
      "title": "Novo título",
      "description": "Nova descrição",
      "status": "Novo status"
    }
    ```

- `DELETE /api/tarefas/:id`
  - Deletar uma tarefa existente (requer autenticação).

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/miletodev/TrilhaBackEndJR-JUN15.git

2. Instale as dependências:

  ```bash
npm install 
```

3. Crie um arquivo .env na raiz do projeto com a variável:

``` bash
JWT_SECRET=seu_segredo
```

4. Inicie o servidor:

```bash
npm start
```
## Testes
Use o Postman ou outra ferramenta para fazer requisições à API. Verifique se a autenticação e o gerenciamento de tarefas estão funcionando corretamente.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou pull request.

## Licença
Este projeto está licenciado sob a MIT License.