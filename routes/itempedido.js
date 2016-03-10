'use strict';
/*
 * @controller: Item pedido
 */
var express = require('express');
var router = express.Router();
var models = require('../models/data-base-helper');
/* 
 * Cadastar 
 */
router.post('/cadastrar', function (req, res, next) {
    models.ItemPedido.create({
        id_pedido: req.body.pedido,
        id_produto: req.body.produto,
        Quantidade: req.body.quantidade
    }).then(function ($itemPedido) {
        res.status(200).json($itemPedido);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Editar
 */
router.put('/editar/:id', function (req, res, next) {
    models.ItemPedido.find({
        where: {
            id: req.params.id
        }
    }).then(function ($itemPedido) {
        if ($itemPedido) {
            $itemPedido.updateAttributes({
                Quantidade: req.body.quantidade,
                id_produto: req.body.produto,
                id_pedido: req.body.pedido
            }).then(function ($itemPedido) {
                res.status(200).send($itemPedido);
            }).catch(function ($err) {
                res.status(500).json($err.message);
            });
        }
    });
});
/* 
 * Deletar
 */
router.delete('/excluir/:id', function (req, res, next) {
    models.ItemPedido.destroy({
        where: {
            id: req.params.id
        }
    }).then(function ($itemPedido) {
        res.status(200).json($itemPedido);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Consultar todos 
 */
router.get('/consultar/todos', function (req, res, next) {
    models.ItemPedido.findAll({}).then(function ($itemPedido) {
        res.status(200).json($itemPedido);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por identificador
 */
router.get('/consultar/:id', function (req, res, next) {
    models.ItemPedido.find({
        where: {
            id: req.params.id
        }
    }).then(function ($itemPedido) {
        res.status(200).json($itemPedido);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por UF
 */
router.get('/consultar/:uf', function (req, res, next) {
    models.ItemPedido.find({
        where: {
            Uf: req.params.uf
        }
    }).then(function ($itemPedido) {
        res.status(200).json($itemPedido);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;