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
    .then(postData => {
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn})
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// render a single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
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
    if(!postData) {
      res.status(404).json({ message: 'No post found with this ID!' });
      return;
    }
    const post = postData.get({ plain: true });
    res.render('single-post', { post, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// render login/signup page
router.get('/login', (req, res) => {
  // if logged in, redirect to homepage
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;