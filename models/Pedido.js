'use strict';
/**
 * @Entity Pedido
 */
module.exports = function (sequelize, DataTypes) {
    var Pedido = sequelize.define('Pedido', 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'pedido_id',
                allowNull: false,
                msg: "Chave primária"
            },
            Data: {
                type: DataTypes.DATE,
                field: 'pedido_data',
                msg: "Data do pedido"
            }
        }, {
        classMethods: {
            associate: function (models) {
                Pedido.belongsTo(models.Cliente,{
                    foreignKey: 'id_cliente', 
                    as: 'cliente'
                });
                Pedido.hasMany(models.ItemPedido,{
                    foreignKey: 'id_pedido', 
                    targetKey: 'id'
                });
            }
        }
    });
    return Pedido;
};