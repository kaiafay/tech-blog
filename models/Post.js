const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model { }

// define table columns and configuration
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    }, 
    {
        sequelize,
        modelName: 'post'
    }
);

module.exports = Post;