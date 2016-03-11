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
    models.Municipio.find({
        where: {
            id: req.params.id
        }
    }).then(function ($municipio) {
        if ($municipio) {
            $municipio.updateAttributes({
                Descricao: req.body.descricao,
                Uf: $enum[req.body.uf.toUpperCase()].value
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
    models.Municipio.destroy({
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
    models.Municipio.findAll({}).then(function ($retorno) {
        $retorno !== null ? res.status(200).json($retorno) : res.status(204).json("");
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
    }).then(function ($retorno) {
        res.status(200).json($retorno);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;