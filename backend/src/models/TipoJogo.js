const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const TipoJogo = sequelize.define("tipo_jogo",{
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
            len: [3, 100],
            unique: true
        }
    },
   
});
module.exports = TipoJogo; 