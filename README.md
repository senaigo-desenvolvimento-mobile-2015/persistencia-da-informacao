# Persistencia da informação

Trabalho para a matéria Persistência da informação, prof. Edjalma Queiros da Silva, na pós-graduação em Projeto e desenvolvimento de software para mobile SENAC / FATESG GO.

Desenvolvido com [Node.js](https://nodejs.org/en/) com [Express](http://expressjs.com/) e [Sequelize](http://docs.sequelizejs.com/en/latest/) como ORM.

![MER](/public/images/mer.png "Modelo")

Estrutura do projeto:
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