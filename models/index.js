// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// define model associations
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };