const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const Usuario = sequelize.define("usuario",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(11),
        validate: {
            len: [11, 11],
            unique: true
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [6, 100],
            unique: true
        }
    },
   cpf: {
        allowNull: false,
        type: Sequelize.STRING(11),
        validate: {
            len: [11, 11],
            unique: true
        }
    },
    login: {
        allowNull: false,
        type: Sequelize.STRING(24),
        validate: {
            len: [3, 24],
            unique: true
        }
    },
    senha_login: {
        allowNull: false,
        type: Sequelize.STRING(16),
        validate: {
            len: [8, 16]
        }
    },
   
});
module.exports = Usuario; 