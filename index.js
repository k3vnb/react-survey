const express = require('express');
require('./services/passport');
require('./routes/authRoutes');

const app = express();

// our authRoutes file returns a function, here we pass app to it as an arg. 
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);