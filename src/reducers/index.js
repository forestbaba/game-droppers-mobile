import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './post';
import profile from './profile';

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    profiles:profile
})