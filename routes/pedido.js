'use strict';
/*
 * @controller: Pedido
 */
var express = require('express');
var router = express.Router();
var models = require('../models/data-base-helper');
/* 
 * Cadastar 
 */
router.post('/cadastrar', function (req, res, next) {
    models.Pedido.create({
        id_cliente: req.body.cliente,
        Data: Date()
    }).then(function ($retorno) {
        res.status(200).json($retorno);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Editar
 */
router.put('/editar/:id', function (req, res, next) {
    models.Pedido.find({
        where: {
            id: req.params.id
        }
    }).then(function ($pedido) {
        if ($pedido) {
            $pedido.updateAttributes({
                Data: req.body.data
            }).then(function ($retorno) {
                res.status(200).send($retorno);
            }).catch(function ($err) {
                res.status(500).json($err.message);
            });
        }else{
            res.status(204).json("");
        }
    });
});
/* 
 * Deletar
 */
router.delete('/excluir/:id', function (req, res, next) {
    models.Pedido.destroy({
        where: {
            id: req.params.id
        }
    }).then(function ($pedido) {
        res.status(200).json($pedido);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Consultar todos 
 */
router.get('/consultar/todos', function (req, res, next) {
    models.Pedido.findAll({
        attributes: ['pedido_id', 'pedido_data'],
        include: [
            {
                model: models.Cliente,
                attributes: ['cliente_nome', 'cliente_email'], 
                paranoid: false, 
                required: true
            },{
                model: models.ItemPedido,
                attributes: ['item_quantidade'], 
                paranoid: true,
                include :[{
                    model: models.Produto,
                    attributes: ['produto_id','produto_descricao', 'produto_preco'], 
                    paranoid: true
                }]
            }
        ]
    }).then(function ($retorno) {
        $retorno !== null ? res.status(200).json($retorno) : res.status(204).json("");
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por identificador
 */
router.get('/consultar/:id', function (req, res, next) {
    models.Pedido.find({
        attributes: ['pedido_id', 'pedido_data'],
        include: [
            {
                model: models.Cliente,
                attributes: ['cliente_nome', 'cliente_email'], 
                paranoid: false, 
                required: true
            },{
                model: models.ItemPedido,
                attributes: ['item_quantidade'], 
                paranoid: true,
                include :[{
                    model: models.Produto,
                    attributes: ['produto_id','produto_descricao', 'produto_preco'], 
                    paranoid: true
                }]
            }
        ],
        where: {
            id: req.params.id
        }
    }).then(function ($pedido) {
        $pedido !== null ? res.status(200).json($pedido) : res.status(204).json("");
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;