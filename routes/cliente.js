'use strict';
/*
 * @controller: Cliente
 */
var express = require('express');
var router = express.Router();
var models = require('../models/data-base-helper');
/* 
 * Cadastar 
 */
router.post('/cadastrar', function (req, res, next) {
    models.Cliente.create({
        Nome: req.body.nome,
        Email: req.body.email,
        Senha: req.body.senha,
        id_cep: req.body.id_cep
    }).then(function ($cliente) {
        res.status(200).json($cliente);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Editar
 */
router.put('/editar/:id', function (req, res, next) {
    models.Cliente.find({
        where: {
            id: req.params.id
        }
    }).then(function ($cliente) {
        if ($cliente) {
            $cliente.updateAttributes({
                Nome: req.body.nome,
                Senha: req.body.senha,
                Email: req.body.email,
                id_cep: req.body.cep
            }).then(function ($cliente) {
                res.status(200).send($cliente);
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
    models.Cliente.destroy({
        where: {
            id: req.params.id
        }
    }).then(function ($cliente) {
        res.status(200).json($cliente);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/* 
 * Consultar todos 
 */
router.get('/consultar/todos', function (req, res, next) {
    models.Cliente.findAll({}).then(function ($cliente) {
        res.status(200).json($cliente);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por identificador
 */
router.get('/consultar/:id', function (req, res, next) {
    models.Cliente.find({
        where: {
            id: req.params.id
        }
    }).then(function ($cliente) {
        res.status(200).json($cliente);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});
/*
 * Consultar por UF
 */
router.get('/consultar/:uf', function (req, res, next) {
    models.Cliente.find({
        where: {
            Uf: req.params.uf
        }
    }).then(function ($cliente) {
        res.status(200).json($cliente);
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;