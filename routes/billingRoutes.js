const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        // const charge = await stripe.charges.create({
        //     amount: 200,
        //     currency: 'usd',
        //     description: '$2 for a Survey',
        //     source: req.body.id
        // });
        // console.log(keys.stripeSecretKey, charge);
        console.log(req.body);
    });
};