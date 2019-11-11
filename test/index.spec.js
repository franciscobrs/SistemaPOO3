//var projeto = require('../app/models/projeto');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp); 

/*
 * Teste da rota: /GET
 */

describe('/GET usuario', function() {
    it('Deve retornar todos os usuarios', function(done) {
        chai.request(server)
        .get('/usuarios')
        .end(function(error, res) {
            console.log(res.body)

            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os projetos cadastrados na base de dados:
            res.body.should.be.a('array');
            //res.body.length.should.be.eql(0);
        done();
        });
    });
});

/** 
 * Teste da rota: /GET/:id
 */

describe('/GET/:id usuario', function() {
    it('Deve retornar um usuario dado o id', function(done) {
        chai.request(server)
        .get('/usuarios/' + 1)
        .end(function(error, res) {
            console.log(res.body)

            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os projetos cadastrados na base de dados:
            res.should.be.a('object');
            //res.body.length.should.be.eql(0);
        done();
        });
    });
});


/*
 * Teste da rota: /POST
 */

/*
describe('/POST usuario', function() {
    it('Deve Criar um Usuario', function(done) {
        var projeto = {
            nome: "Francisco Bitencourt",
            dataNascimento: "1999/02/18",
            telefone: "55997046208",
            email: "franciscobitencourt47@gmail.com",
            cpf: "03714533052",
            login: "francisco",
            senha_login: "senha123",
        } 
        chai.request(server)
        .post('/usuario')
        .send(usuario)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(usuario);
        done();
        }); 
    });
});*/

