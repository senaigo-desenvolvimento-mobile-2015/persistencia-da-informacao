'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Ceps', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
                field: 'cep_id'
            },
            Cep: {
                allowNull: false,
                type: Sequelize.STRING(12),
                field: 'cep'
            },
            bairro: {
                type: Sequelize.STRING(300),
                field: 'cep_bairro'
            },
            logradouro: {
                type: Sequelize.STRING(500),
                field: 'cep_logradouro'
            },
            id_municipio: {
                type: Sequelize.BIGINT,
                field: 'id_municipio',
                references: {
                    model: 'Municipios',
                    key: 'municipio_id',
                    deferrable: Sequelize.Deferrable.NOT
                }
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
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Ceps');
    }
};