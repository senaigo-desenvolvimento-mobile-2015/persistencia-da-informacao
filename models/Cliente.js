'use strict';
/**
 * @Entity Cliente
 */
module.exports = function (sequelize, DataTypes) {
    var Cliente = sequelize.define('Cliente',
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                    msg: "Chave primária"
                },
                Nome: {
                    type: DataTypes.STRING,
                    field: 'cliente_nome',
                    msg: "Nome"
                },
                Senha: {
                    type: DataTypes.STRING,
                    field: 'cliente_senha',
                    msg: "Senha"
                },
                Email: {
                    type: DataTypes.STRING,
                    field: 'cliente_email',
                    msg: "Email",
                    validate: {
                        isEmail: true,
                    }
                }
            }, {
        classMethods: {
            associate: function (models) {
                Cliente.hasMany(models.Cep);
                Cliente.hasMany(models.Pedido);
            }
        }
    });
    return Cliente;
};