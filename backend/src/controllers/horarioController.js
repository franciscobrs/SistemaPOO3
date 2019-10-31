const Horario = require('../models/Horario');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Horario.findAll()
    .then(horario => {
        if(horario){
            res.status(status.OK).send(horario);
        } 
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const data = req.body.data;
    const hora_inicio = req.body.hora_inicio;
    const hora_fim= req.body.hora_fim;
    const tipo_jogo = req.body.tipo_jogo;
    const usuario = req.body.usuario;
    const status = req.body.status;  
   
    Horario.create({
        data : data,
        hora_inicio : hora_inicio,
        hora_fim : hora_fim,
        tipo_jogo : tipo_jogo,
        usuario : usuario,
        status : status 
     
    })
    .then(horario => {
        if(horario){
            res.status(status.OK).send(horario);
        } else{
            res.status(status.NOT_FOUND).send();
        } 
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const data = req.body.data;
    const hora_inicio = req.body.hora_inicio;
    const hora_fim= req.body.hora_fim;
    const tipo_jogo = req.body.tipo_jogo;
    const usuario = req.body.usuario;
    const status = req.body.status; 

    Horario.findByPk(id)
    .then(horario => {
        if(horario){
            horario.update({
                data : data,
                hora_inicio : hora_inicio,
                hora_fim : hora_fim,
                tipo_jogo : tipo_jogo,
                usuario : usuario,
                status : status 
              
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
    const data = req.body.data;
    const hora_inicio = req.body.hora_inicio;
    const hora_fim= req.body.hora_fim;
    const tipo_jogo = req.body.tipo_jogo;
    const usuario = req.body.usuario;
    const status = req.body.status; 
    
    Horario.findByPk(id)
    .then(usuario => {
        if(horario){
            res.status(status.OK).send(horario);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const data = req.body.data;
    const hora_inicio = req.body.hora_inicio;
    const hora_fim= req.body.hora_fim;
    const tipo_jogo = req.body.tipo_jogo;
    const usuario = req.body.usuario;
    const status = req.body.status; 

    Horario.findByPk(id)
    .then(horario => {
        if(horario){
            horario.destroy({
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