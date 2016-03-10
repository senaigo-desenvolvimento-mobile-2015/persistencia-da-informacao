'use strict';
/*
 * @controller: Municipio
 */
var express = require('express');
var router = express.Router();
var models = require('../models/data-base-helper');
var $enum = require('../helpers/EnumUf');
/* 
 * Cadastar 
 */
router.post('/cadastrar', function (req, res, next) {
    models.Municipio.create({
        Descricao: req.body.descricao,
        Uf: $enum[req.body.uf.toUpperCase()].value
    }).then(function ($municipio) {
        res.status(200).json($municipio);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Editar
 */
router.put('/editar/:id', function (req, res, next) {
    models.Municipio.find({
        where: {
            id: req.params.id
        }
    }).then(function ($municipio) {
        if ($municipio) {
            $municipio.updateAttributes({
                Descricao: req.body.descricao,
                Uf: $enum[req.body.uf.toUpperCase()].value
            }).then(function ($municipio) {
                res.status(200).send($municipio);
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
    models.Municipio.destroy({
        where: {
            id: req.params.id
        }
    }).then(function ($municipio) {
        res.status(200).json($municipio);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Consultar todos 
 */
router.get('/consultar/todos', function (req, res, next) {
    models.Municipio.findAll({}).then(function ($municipio) {
        res.status(200).json($municipio);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por identificador
 */
router.get('/consultar/:id', function (req, res, next) {
    models.Municipio.find({
        where: {
            id: req.params.id
        }
    }).then(function ($municipio) {
        res.status(200).json($municipio);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por UF
 */
router.get('/consultar/:uf', function (req, res, next) {
    models.Municipio.find({
        where: {
            Uf: req.params.uf
        }
    }).then(function ($municipio) {
        res.status(200).json($municipio);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;