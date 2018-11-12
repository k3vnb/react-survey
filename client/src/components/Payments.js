import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render(){


        return (
            <StripeCheckout
                name="SurveyMania"
                description="$2 for a survey" 
                amount={200}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Money</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions) (Payments);