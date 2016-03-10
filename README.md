# Persistencia da informação

### Descrição
Exercício para a matéria Persistência da informação, *Prof. Edjalma Queiros da Silva*, na pós-graduação em Projeto e desenvolvimento de software para mobile *SENAC / FATESG GO*.

### Dependências
* [Node.js](https://nodejs.org/en/) 
* [Express web framework for Node.js](http://expressjs.com/) 
* [Sequelize ORM for Node.js](http://docs.sequelizejs.com/en/latest/)
* [PostgreSQL](http://www.postgresql.org/)

### Instalação
1 - Com o node.js previamente instalado, rodar:

``$ npm install``

2 - É necessário criar o banco de dados manualmente e editar o arquivo *config.json* informando o banco, usuário e senha.

``$ node_modules/.bin/sequelize db:migrate``

3 - Subir o projeto

``$ npm start``

### MER

![MER](/public/images/mer.png "Modelo")

### Estrutura do projeto:

Para o trabalho, levar em consideração os arquivos no diretório models e routers.
```
├── app.js
├── bin
│   └── www
├── config.json
├── helpers (Enum)
│   └── EnumUf.js
├── migrations (Criação das tabelas no banco de dados)
│   ├── 1-create-municipio.js
│   ├── 2-create-cliente.js
│   ├── 3-create-cep.js
│   ├── 4-create-produto.js
│   ├── 5-create-pedido.js
│   ├── 6-create-item-pedido.js
├── models (Pode ser considerado como as @Entity comparado a JPA)
│   ├── Cep.js
│   ├── Cliente.js
│   ├── data-base-helper.js
│   ├── ItemPedido.js
│   ├── Municipio.js
│   ├── Pedido.js
│   ├── Produto.js
├── package.json
├── routes (Pode ser considerado como as Entity Managers comparado a JPA)
│   ├── cep.js
│   ├── cliente.js
│   ├── municipio.js
│   ├── pedido.js
│   ├── itempedido.js
│   ├── produto.js
├── seeders
```
### Sugestão
Utilizar o [Postman](https://www.getpostman.com/), uma ótima ferramenta para realizar testes e requisições http.

![Postman](/public/images/postman.png "Postman")