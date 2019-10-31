const Post = require('../models/post');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Post.findAll()
    .then(post => {
        if(post){
            res.status(status.OK).send(post);
        } 
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const idUsuario = req.body.idUsuario;

    Post.create({
        titulo: titulo,
        descricao: descricao,
        idUsuario: idUsuario
    })
    .then(post => {
        if(post){
            res.status(status.OK).send(post);
        } else{
            res.status(status.NOT_FOUND).send();
        } 
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const idUsuario = req.body.idUsuario;

    Post.findByPk(id)
    .then(post => {
        if(post){
            post.update({
                titulo: titulo,
                descricao: descricao,
                idUsuario: idUsuario
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
    
    Post.findByPk(id)
    .then(post => {
        if(post){
            res.status(status.OK).send(post);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Post.findByPk(id)
    .then(post => {
        if(post){
            post.destroy({
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