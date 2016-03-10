'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Pedidos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
                field: 'pedido_id'
            },
            data: {
                type: Sequelize.DATE,
                field: 'pedido_data'
            },
            id_cliente: {
                type: Sequelize.BIGINT,
                field: 'id_cliente',
                references: {
                    model: 'Clientes',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.NOT
                }
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
        return queryInterface.dropTable('Pedidos');
    }
};