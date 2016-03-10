'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('ItemPedidos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
                field: 'pedido_id'
            },
            quantidade: {
                type: Sequelize.DATE,
                field: 'pedido_data'
            },
            id_produto: {
                type: Sequelize.BIGINT,
                field: 'id_produto',
                references: {
                    model: 'Produtos',
                    key: 'produto_id',
                    deferrable: Sequelize.Deferrable.NOT
                }
            },
            id_pedido: {
                type: Sequelize.BIGINT,
                field: 'id_pedido',
                references: {
                    model: 'Pedidos',
                    key: 'pedido_id',
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