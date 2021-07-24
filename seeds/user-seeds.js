const { User } = require('../models/User');

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