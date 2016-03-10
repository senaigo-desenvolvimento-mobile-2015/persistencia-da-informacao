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
    }).then(function ($pedido) {
        res.status(200).json($pedido);
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
            }).then(function ($data) {
                res.status(200).send($data);
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
    models.Pedido.findAll({}).then(function ($produto) {
        res.status(200).json($produto);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por identificador
 */
router.get('/consultar/:id', function (req, res, next) {
    models.Pedido.find({
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
 * Consultar por UF
 */
router.get('/consultar/:uf', function (req, res, next) {
    models.Pedido.find({
        where: {
            Uf: req.params.uf
        }
    }).then(function ($pedido) {
        res.status(200).json($pedido);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;