const sequelize = require('../config/connection');
const { User, Post, Comment } = require("../models");
const seedUsers = require('./user-seeds.json');
const seedPosts = require('./post-seeds.json');
const seedComments = require('./comment-seeds.json');




const seedAll = async() => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(seedUsers, {individualHooks:true, returning:true});
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