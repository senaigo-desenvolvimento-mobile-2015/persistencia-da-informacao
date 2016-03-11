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
                allowNull: false,
                msg: "Chave primária"
            },
            Quantidade: {
                type: DataTypes.INTEGER,
                field: 'item_quantidade',
                msg: "Quantidade"
            }
        }, {
            classMethods: {
                associate: function (models) {
                    ItemPedido.belongsTo(models.Pedido,{
                        foreignKey: 'id_pedido'
                    });
                    ItemPedido.belongsTo(models.Produto,{
                        foreignKey: 'id_produto'
                    });
                }
            }
        });
    return ItemPedido;
};