'use strict';
/*
 * @controller: Produto
 */
var express = require('express');
var router = express.Router();
var models = require('../models/data-base-helper');
/* 
 * Cadastar 
 */
router.post('/cadastrar', function (req, res, next) {
    models.Produto.create({
        Descricao: req.body.descricao,
        Preco: req.body.preco,
        Foto: req.body.foto
    }).then(function ($produto) {
        res.status(200).json($produto);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Editar
 */
router.put('/editar/:id', function (req, res, next) {
    models.Produto.find({
        where: {
            id: req.params.id
        }
    }).then(function ($produto) {
        if ($produto) {
            $produto.updateAttributes({
                Descricao: req.body.descricao,
                Preco: req.body.preco,
                Foto: req.body.foto
            }).then(function ($produto) {
                res.status(200).send($produto);
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
    models.Produto.destroy({
        where: {
            id: req.params.id
        }
    }).then(function ($produto) {
        res.status(200).json($produto);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Consultar todos 
 */
router.get('/consultar/todos', function (req, res, next) {
    models.Produto.findAll({}).then(function ($produto) {
        res.status(200).json($produto);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por identificador
 */
router.get('/consultar/:id', function (req, res, next) {
    models.Produto.find({
        where: {
            id: req.params.id
        }
    }).then(function ($produto) {
        res.status(200).json($produto);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por UF
 */
router.get('/consultar/:uf', function (req, res, next) {
    models.Produto.find({
        where: {
            Uf: req.params.uf
        }
    }).then(function ($produto) {
        res.status(200).json($produto);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;