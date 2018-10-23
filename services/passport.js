const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
    });
});

// https://console.developers.google.com
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, 
        async (accessToken, refreshToken, profile, done) => {
            //first search if user is already in database
            const existingUser = await User.findOne({
                googleId: profile.id
            });
            if (existingUser) {
                //if we already have a record w/ user profile ID
                done(null, existingUser);
            } else {
                //we don't have a user record w/ this ID, make new record
                const user =  await new User({
                    googleId: profile.id
                }).save()
                done(null, user);
            }
        }
    )
);