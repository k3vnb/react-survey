import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//development only axios servers
import axios from 'axios'
window.axios = axios;
// test in browser console, create new axios post request by first creating survey: const survey = { title: 'my title', subject: 'my subject', recipients: 'email@email.com', body: 'this be the body'};
// then typing 'axios.post('/api/surveys', survey)';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);

console.log('Stripe Key Is: ', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment Is: ', process.env.NODE_ENV);
