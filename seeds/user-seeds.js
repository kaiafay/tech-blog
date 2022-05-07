const { User } = require('../models');

const UserData = [
    {
        username: 'ashleysmith',
        password: 'testuser'
    },
    {
        username: 'susanbrown',
        password: 'testuser'
    },
    {
        username: 'frank22',
        password: 'testuser'
    },
    {
        username: 'david44',
        password: 'testuser'
    },
    {
        username: 'alexmiller',
        password: 'testuser'
    }
];

const seedUsers = () => User.bulkCreate(UserData, { individualHooks: true });

module.exports = seedUsers;