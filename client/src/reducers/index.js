import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
    //the auth piece of state is being managed by authReducer
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
});