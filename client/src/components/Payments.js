import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render(){
        debugger;

        return (
            <StripeCheckout
                name="SurveyMania"
                description="$2 for a survey" 
                amount={200}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Money</button>
            </StripeCheckout>
        )
    }
}

export default Payments;