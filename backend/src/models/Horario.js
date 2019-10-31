const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const Usuario = require('./usuario');

const TipoJogo = require('./TipoJogo');

const Horario = sequelize.define("horario",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    data: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    hora_inicio: {
        allowNull: false,
        type: Sequelize.TIME
    },
    hora_fim: {
        allowNull: false,
        type: Sequelize.TIME
    },
  

});

Usuario.hasMany(Horario, {
    foreignKey: {
        name: 'idUsuario',
        allowNull: false
    }
})

TipoJogo.hasMany(Horario, {
    foreignKey: {
        name: 'nome_jogo',
        allowNull: false
    }
})
module.exports = Horario; 