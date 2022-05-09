const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Labore ex amet dolore reprehenderit est aute dolor dolor fugiat.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Sunt minim mollit culpa veniam magna.',
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: 'Quis qui sit magna ullamco laborum nisi.',
        user_id: 2,
        post_id: 5
    },
    {
        comment_text: 'Non nostrud excepteur sit esse enim do fugiat nostrud ea dolor irure.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Cupidatat adipisicing ex nostrud irure ea velit incididunt tempor.',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;