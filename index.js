const express = require('express');
const mongoose = require('mongoose');
const keys = require('.config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// our authRoutes file returns a function, here we pass app to it as an arg. 
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);