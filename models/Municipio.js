'use strict';
/*
 * @Entity Município
 */
module.exports = function (sequelize, DataTypes) {
    var Municipio = sequelize.define('Municipio', 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'municipio_id',
                allowNull: false,
                msg: "Chave primária"
            },
            Descricao: {
                type: DataTypes.STRING,
                field: 'municipio_descricao',
                msg: "Descrição do município"
            },
            Uf: {
                type: DataTypes.STRING,
                field: 'municipio_uf',
                msg: "Unidade federativa"
            }
        }
    );
    return Municipio;
};