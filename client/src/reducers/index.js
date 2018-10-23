import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    //the auth piece of state is being managed by authReducer
    auth: authReducer
});