# Desafio de vaga Desenvolvedor Fullstack Jr

Este projeto consiste em uma aplicação web para completar o desafio da vaga para desenvolvedor jr, composta por um frontend desenvolvido com **Vue.js** e **Vuetify**, e um backend implementado com **Node.js** e **Express**.

## Funcionalidades

### Frontend
- Listar produtos cadastrados.
- Adicionar novos produtos.
- Editar informações de produtos existentes.
- Excluir produtos.
- Interface amigável e responsiva utilizando componentes do Vuetify.

### Backend
- API RESTful para gerenciar os dados dos produtos.
- Endpoints para realizar operações CRUD (Create, Read, Update, Delete).

---

## Tecnologias Utilizadas

### Frontend
- **Vue.js**
- **Vuetify**
- **Axios** (para comunicação com o backend)

### Backend
- **Node.js**
- **Express.js**
- **Firestore** (como banco de dados)

---

## Requisitos para Rodar o Projeto

Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

---

## Como Rodar o Projeto

### 1. Clone o Repositório
```bash
git clone https://github.com/jailtonjuniordev/fullstackjr-node-vuejs.git
cd fullstackjr-node-vuejs
```

### 2. Configuração do Backend

1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:  
   Crie um arquivo `.env` com as seguintes configurações:
   ```env
   SERVER_PORT=8080
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

   O backend estará disponível em: [http://localhost:8080/api/v1/**](http://localhost:5000)

---

### 3. Configuração do Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd ../frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:  
   Crie um arquivo `.env` com as seguintes configurações:
   ```env
   VUE_APP_API_URL=http://localhost:3000
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

   O frontend estará disponível em: [http://localhost:3000](http://localhost:8080)

---

## Estrutura do Projeto

```
/backend
  ├── src
  │   ├── config
  │   ├── controllers
  │   ├── entities
  │   ├── routes
  │   ├── services
  │   └── server.js
  └── package.json

/frontend
  ├── src
  │   ├── assets
  │   ├── components
  │   ├── pages
  │   ├── plugins
  │   ├── styles
  │   └── App.vue  
  └── package.json
```

---

## Endpoints da API

- **GET** `/products/view` - Listar todos os produtos.
- **GET** `/products/view/:id` - Listar todos os produtos.
- **POST** `/products/new` - Criar um novo produto.
- **PUT** `/products/edit/:id` - Atualizar um produto existente.
- **DELETE** `/products/del/:id` - Excluir um produto.

---

## Contribuição

Contribuições são bem-vindas!
1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona minha feature'`).
4. Envie para o repositório original (`git push origin minha-feature`).
5. Crie um Pull Request.

---

## Licença

Este projeto está sob a licença [Creative Commons](LICENSE).