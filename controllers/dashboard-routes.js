const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// render dashboard main page
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        // find all posts for one user
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'body', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;