const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model { }

// define table columns and configuration
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING(280),
        body: DataTypes.STRING(3000),
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    }, 
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;