//all users routes will be stored here

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//register route
router.post('/register', (req, res, next) => {
    //registering a new user
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.email,
        password: req.body.passport
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
            
        }
    });
});

//authenticate route
router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

//profile route
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

module.exports = router;