const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 200,
            currency: 'usd',
            description: '$2 for a Survey',
            source: req.body.id
        });
        // console.log(keys.stripeSecretKey, charge);
        // console.log(req.body)
        req.user.credits += 2;
        const user = await req.user.save();

        res.send(user);
    
    });
};