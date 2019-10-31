const TipoJOgo = require('../models/TipoJogo');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    TipoJOgo.findAll()
    .then(tipojogo => {
        if(tipojogo){
            res.status(status.OK).send(tipojogo);
        } 
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
   
    TipoJOgo.create({
        nome: nome
     
    })
    .then(tipojogo => {
        if(tipojogo){
            res.status(status.OK).send(tipojogo);
        } else{
            res.status(status.NOT_FOUND).send();
        } 
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const nome = req.body.nome;

    TipoJOgo.findByPk(id)
    .then(tipojogo => {
        if(tipojogo){
            tipojogo.update({
                nome: nome
              
            },
                {
                    where: {id: id}
                }
            )
            .then(() => {
                res.status(status.OK).send();
            }).catch(error => next(error));
        } else{ res.status(status.NOT_FOUND).send()}
    }) .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    
    TipoJOgo.findByPk(id)
    .then(usuario => {
        if(tipojogo){
            res.status(status.OK).send(tipojogo);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    TipoJOgo.findByPk(id)
    .then(tipojogo => {
        if(tipojogo){
            tipojogo.destroy({
                where: {id: id}
            })
            .then(() => {
            res.status(status.OK).send();
        })
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}