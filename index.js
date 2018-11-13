const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/user');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        //maxAge, how long cookie is valid in browser, expressed in milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// our authRoutes file returns a function, here we pass app to it as an arg. 
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//only for prod
if (process.env.NODE_ENV === 'production'){
    // Express will serve prod assets, ie main.js & main.css
    app.use(express.static('client/build'));
    //Express will serve index.js if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}


const PORT = process.env.PORT || 5000;
app.listen(PORT);