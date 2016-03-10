'use strict';
/**
 * @Entity Item pedido
 */
module.exports = function (sequelize, DataTypes) {
    var ItemPedido = sequelize.define('ItemPedido',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'item_pedido_id',
                allowNull: false,
                msg: "Chave primária"
            },
            Quantidade: {
                type: DataTypes.INTEGER,
                field: 'item_pedido_quantidade',
                msg: "Quantidade"
            }
        }, {
            classMethods: {
                associate: function (models) {
//                    /*@ManyToOne*/
//                    ItemPedido.hasMany(models.Produto,{
//                        foreignKey: 'fk_produto', 
//                        targetKey: 'produto_id'
//                    });
//                    /*@ManyToOne*/
//                    ItemPedido.hasMany(models.Pedido,{
//                        foreignKey: 'fk_pedido', 
//                        targetKey: 'pedido_id'
//                    });
                }
            }
        });
    return ItemPedido;
};