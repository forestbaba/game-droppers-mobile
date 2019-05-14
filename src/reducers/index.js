import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './post';

export default combineReducers({
    auth: authReducer,
    posts: postReducer
})