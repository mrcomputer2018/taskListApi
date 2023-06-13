# Api task list

## Sobre

- Esta Api é para ser usada no aplicativo web e mobile de listas de tarefas.

### Tabela de Conteúdos

- Sobre
- Tabela de conteúdos
- Status do projeto

### Status do Projeto

- Finalizado.

### Features

- [x] Commit init
- [x] feat: criando arquivo de config DB
- [x] Feat: criando migration de users
- [x] Feat: criando mo model user
- [x] Feat: conexao do BD com os models
- [x] test: testando conexao com banco
- [x] feat: cadastro de usuarios
- [x] feat: implementando hash na senha
- [x] feat: autenticacao JWT
- [x] feat: middleware de autenticacao
- [x] feat: atualizando pefil  de usuario
- [x] feat: validando campos
- [x] feat: migration e moodel de tarefas
- [x] feat: criar e listar tarefas
- [x] feat: conclusão de tarefas

### Pré-requisitos e como rodar a aplicação/testes

#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/mrcomputer2018/taskListApi>

# Acesse a pasta do projeto no terminal/cmd
$ cd apitasklist

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
$ yarn dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

```

### Tecnologias utilizadas

-[Node.js](https://nodejs.org/en/)

- Express
- Sucrase
- Eslint
- Pretier
- Nodemon
- Sequelize
- Postgres
- Bcryptjs
- [JWT](https://jwt.io/)

### Autor

Marcelo Ribeiro

### Licença

MIT License

Copyright (c) <2023> <Marcelo Ribeiro>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
