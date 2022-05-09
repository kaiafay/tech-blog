const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// render homepage
router.get('/', (req, res) => {
    Post.findAll({
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
    .then((postData) => {
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn})
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


module.exports = router;