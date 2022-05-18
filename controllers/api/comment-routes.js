const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll()
    .then(commentData => res.json(commentData))
    .catch(err => {
        res.status(500).json(err);
    });
});

// create a comment
router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
    .then(commentData => {
        res.json(commentData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;