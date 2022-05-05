const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model { }

// define table columns and configuration
Post.init(
    {
        title: Datatypes.STRING,
        body: Datatypes.STRING
    }, 
    {
        sequelize,
        modelName: 'post'
    }
);

module.exports = Post;