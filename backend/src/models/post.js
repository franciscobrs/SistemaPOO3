const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const Usuario = require('../models/usuario');

const Post = sequelize.define("post", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    titulo: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    }
});

Usuario.hasMany(Post, {
    foreignKey: {
        name: 'idUsuario',
        allowNull: false
    }
})

module.exports = Post;