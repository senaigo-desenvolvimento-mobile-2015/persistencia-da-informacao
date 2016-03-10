'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Clientes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
                field: 'id'
            },
            nome: {
                type: Sequelize.STRING(250),
                field: 'cliente_nome'
            },
            senha: {
                type: Sequelize.STRING(80),
                field: 'cliente_senha'
            },
            email: {
                type: Sequelize.STRING(255),
                field: 'cliente_email'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Clientes');
    }
};