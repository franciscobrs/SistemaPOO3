const Usuario = require('../models/usuario');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Usuario.findAll()
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } 
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const dataNascimento = req.body.dataNascimento;
    const email = req.body.email;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const login = req.body.login;
    const senha_login = req.body.senha_login;

    Usuario.create({
        nome: nome,
        dataNascimento: dataNascimento,
        email: email,
        cpf: cpf,
        telefone: telefone,
        login: login,
        senha_login: senha_login
    })
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } else{
            res.status(status.NOT_FOUND).send();
        } 
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const nome = req.body.nome;
    const dataNascimento = req.body.dataNascimento;
    const email = req.body.email;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const login = req.body.login;
    const senha_login = res.body.senha_login;

    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            usuario.update({
                nome: nome,
                dataNascimento: dataNascimento,
                email: email,
                cpf: cpf,
                telefone: telefone,
                login: login,
                senha_login: senha_login
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
    
    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            usuario.destroy({
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