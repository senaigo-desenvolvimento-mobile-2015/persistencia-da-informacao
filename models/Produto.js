'use strict';
/**
 * @Entity Produto
 */
module.exports = function (sequelize, DataTypes) {
    var Produto = sequelize.define('Produto',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'produto_id',
                allowNull: false,
                msg: "Chave primária"
            },
            Descricao: {
                type: DataTypes.STRING,
                field: 'produto_descricao',
                allowNull: false,
                validate: {
                    lenghtValidate : function(value){
                        if(value.length < 1){
                            throw new Error('Campo não pode ser vazio.');
                        }
                        if(value.length > 255){
                            throw new Error('Tamanho máximo permitido foi extrapolado.');
                        }
                    }
                },
                msg: "Descrição"
            },
            Preco: {
                type: DataTypes.DOUBLE,
                field: 'produto_preco',
                msg: "Preço",
                validate: {
                    isDecimal: true 
                }
            },
            Foto: {
                type: DataTypes.STRING,
                field: 'produto_foto',
                msg: "Foto"
            }
        },{
            hooks:{
                beforeCreate : function(){
                    console.log("Disparar algum evento antes de cadastrar");
                }, 
                afterCreate : function(){
                    console.log('Disparar algum evento após cadastrar');
                }
            }
        }
    );
    return Produto;
};