'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Produtos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
                field: 'produto_id'
            },
            descricao: {
                type: Sequelize.STRING(500),
                field: 'produto_descricao'
            },
            preco: {
                type: Sequelize.REAL,
                field: 'produto_preco',
                allowNull: false,
                defaultValue: 0.0
            },
            foto: {
                type: Sequelize.STRING(500),
                field: 'produto_foto'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Produtos');
    }
};