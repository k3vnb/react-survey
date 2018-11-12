const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        if (!req.user){
            return res.status(401).send({ error: 'You must log in' });
        }
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