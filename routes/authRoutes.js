// calling passport from npm module, this is not connected to our passport.js file
const passport = require('passport');

module.exports = (app) => {
    app.get(
        //whenever someone visits the route '/auth/google', they are redirected to this passport function
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    
    app.get('/auth/google/callback', passport.authenticate('google'));
}
