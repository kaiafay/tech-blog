// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// define model associations
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
});

User.hasMany(Post, {
    foreignKey: 'userId'
});

User.hasMany(Comment, {
    foreignKey: 'userId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };