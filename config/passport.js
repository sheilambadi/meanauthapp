//jwt - json web token
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const config = require('../config/database');

//make function accessible everywhere
module.exports = function(passport){
    //create options
    let opts = {};

    //use authorization header to pass token back and fourth
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    //add key
    opts.secretOrKey = config.secret;

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload.data._id, (err, user) => {
            if(err){
                return done(err, false);
            }

            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}