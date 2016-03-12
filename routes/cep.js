var express = require('express');
var router = express.Router();
var models = require('../models/data-base-helper');
/* 
 * Cadastar 
 */
router.post('/cadastrar', function (req, res, next) {
    models.Cep.create({
        Cep: req.body.cep,
        Bairro: req.body.bairro,
        Logradouro: req.body.logradouro,
        id_municipio : req.body.municipio,
        id_cliente : req.body.cliente
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
    models.Cep.find({
        where: {
            Cep: req.params.id
        }
    }).then(function ($cep) {
        if ($cep) {
            $cep.updateAttributes({
                Cep : req.body.cep,
                Bairro: req.body.bairro,
                Logradouro: req.body.logradouro,
                id_municipio : req.body.municipio,
                id_cliente : req.body.cliente 
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
    models.Cep.destroy({
        where: {
            Cep: req.params.id
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
    models.Cep.findAll({
        attributes: ['cep_id','cep_bairro', 'cep_logradouro'],
            include: [{
                model: models.Municipio,
                attributes: ['municipio_descricao', 'municipio_uf'], 
                paranoid: false, 
                required: true
            }]
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
    models.Cep.find({
        attributes: ['cep_id','cep_bairro', 'cep_logradouro'],
            include: [{
                model: models.Municipio,
                attributes: ['municipio_descricao', 'municipio_uf'], 
                paranoid: false, 
                required: true
            }],
        where: {
            Cep: req.params.id
        }
    }).then(function ($retorno) {
        $retorno !== null ? res.status(200).json($retorno) : res.status(204).json("");
    }).catch(function ($err) {
        res.status(500).json($err.message);
    });
});

module.exports = router;
