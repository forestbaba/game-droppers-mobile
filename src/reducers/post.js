import {
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE,
    LOAD_POST,
    LOAD_SINGLE_POST,
    LOAD_SINGLE_POST_SUCCESS,
    LOAD_SINGLE_POST_FAILURE,ADD_POST,
    FETCH_USER_POST,FETCH_USER_POST_SUCCESS,FETCH_USER_POST_FAILURE
} from '../actions/actionTypes';

const initialState = {
    posts: [],
    userposts:[],
    post: {},
    loading: false,
    errors: ''
}

export default function (state = initialState, action) {


    switch (action.type) {
        case LOAD_POST:
            return { ...state, loading: true }

        case LOAD_POST_SUCCESS:
            return { ...state, posts: action.payload, loading: false }

        case LOAD_POST_FAILURE:
            return {
                ...state,
                loading: false,
                errors: "Loading Post Fail"
            }

        case LOAD_SINGLE_POST:
            return {
                ...state, loading: true
            }

        case LOAD_SINGLE_POST_SUCCESS:
            return {
                ...state,
                 post: action.payload,
                  loading: false
            }
        case LOAD_SINGLE_POST_FAILURE:
            return {
                ...state, loading: false, errors: "Loading post fail"
            }

        case FETCH_USER_POST:
            return{
                ...state, loading:true
            }
        case FETCH_USER_POST_SUCCESS:
            return {
                ...state,
                userposts: action.payload,
                loading: false
            }
        case LOAD_SINGLE_POST_FAILURE:
            return {
                ...state, loading: false, errors: "Loading user post fail"
            }

        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };

        default:
            return state
    }
}