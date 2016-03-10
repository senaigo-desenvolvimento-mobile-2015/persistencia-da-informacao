'use strict';
/**
 * @Entity Cep
 */
module.exports = function (sequelize, DataTypes) {
    var Cep = sequelize.define('Cep', 
        {
            Cep: {
                type: DataTypes.STRING,
                primaryKey: true,
                field: 'cep_id',
                allowNull: false,
                msg: "Chave primária", 
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
                Cep.belongsToMany(models.Cliente,{
                    as : 'Cliente',
                    foreignKey: 'id_cliente'
                });
            }
        }
    });
    return Cep;
};