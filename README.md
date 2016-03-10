# Persistencia da informação

### Descrição
Exercício para a matéria Persistência da informação, *Prof. Edjalma Queiros da Silva*, na pós-graduação em Projeto e desenvolvimento de software para mobile *SENAC / FATESG GO*.

### Instalação
1 - Com o node.js previamente instalado, rodar:

``$ npm install``

2 - É necessário criar o banco de dados manualmente e editar o arquivo *config.json* informando o banco, usuário e senha.

``$ node_modules/.bin/sequelize db:migrate``

### Dependências
* [Node.js](https://nodejs.org/en/) 
* [Express](http://expressjs.com/) 
* [Sequelize](http://docs.sequelizejs.com/en/latest/).
* [PostgreSQL](http://www.postgresql.org/)

### MER

![MER](/public/images/mer.png "Modelo")

### Estrutura do projeto:
```
├── app.js
├── bin
│   └── www
├── config.json
├── helpers
│   └── EnumUf.js
├── migrations
│   ├── 1-create-municipio.js
│   ├── 2-create-cliente.js
│   ├── 3-create-cep.js
│   ├── 4-create-produto.js
│   ├── 5-create-pedido.js
│   ├── 6-create-item-pedido.js
├── models
│   ├── Cep.js
│   ├── Cliente.js
│   ├── data-base-helper.js
│   ├── ItemPedido.js
│   ├── Municipio.js
│   ├── Pedido.js
│   ├── Produto.js
├── package.json
├── routes
│   ├── cep.js
│   ├── cliente.js
│   ├── municipio.js
│   ├── produto.js
├── seeders
```

[Postman](https://www.getpostman.com/) uma ótima ferramenta para realizar testes e requisições http.

![Postman](/public/images/postman.png "Postman")