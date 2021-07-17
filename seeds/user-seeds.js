const { User } = require('../models');

const userData = [{
        username: 'cyron',
        password: 'cyronf'

    },
    {
        username: 'peter',
        password: 'pete'
    },
    {
        username: 'ralph',
        password: 'ralphl'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;