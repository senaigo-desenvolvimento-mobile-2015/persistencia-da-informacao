'use strict';
/**
 * @Entity Cep
 */
module.exports = function (sequelize, DataTypes) {
    var Cep = sequelize.define('Cep', 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'cep_id',
                msg: "Chave primária"
            },
            Cep: {
                type: DataTypes.STRING,
                primaryKey: true,
                field: 'cep',
                allowNull: false,
                msg: "Cep", 
                validate :{
                    len: [1,10]
                }
            },
            Bairro: {
                type: DataTypes.STRING,
                field: 'cep_bairro',
                msg: "Bairro"
            },
            Logradouro: {
                type: DataTypes.STRING,
                field: 'cep_logradouro',
                msg: "Logradouro"
            }
        }, {
        classMethods: {
            associate: function (models) {
                Cep.belongsTo(models.Municipio,{
                    foreignKey: 'id_municipio'
                });
                Cep.belongsTo(models.Cliente,{
                    foreignKey: 'id_cliente'
                });
            }
        }
    });
    return Cep;
};