'use strict';
/*
 * @migration: Municipio
 */
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Municipios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
                field: 'municipio_id'
            },
            descricao: {
                type: Sequelize.STRING(500),
                field: 'municipio_descricao'
            },
            Uf: {
                type: Sequelize.STRING(80),
                field: 'municipio_uf'
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
        return queryInterface.dropTable('Municipios');
    }
};