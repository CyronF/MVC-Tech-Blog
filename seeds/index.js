const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const {User, Post, Comment} = require("../models")

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    const user = await User.bulkCreate(seedUsers, {individualHooks: true, returning:true});
    for (const post of seedPosts){
        await Post.create({
            ...post
        })
    };

    for (const comment of seedComments){
        await Comment.create({
            ...comment
        })
    };

    process.exit(0);
};

seedAll();