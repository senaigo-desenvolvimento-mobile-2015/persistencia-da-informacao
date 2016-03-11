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
    models.ItemPedido.destroy({
        where: {
            id: req.params.id
        }
    }).then(function ($retorno) {
        res.status(200).json($retorno);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Consultar todos 
 */
router.get('/consultar/todos', function (req, res, next) {
    models.ItemPedido.findAll({}).then(function ($retorno) {
        $retorno !== null ? res.status(200).json($retorno) : res.status(204).json("");
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
    }).then(function ($retorno) {
        $retorno !== null ? res.status(200).json($retorno) : res.status(204).json("");
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;