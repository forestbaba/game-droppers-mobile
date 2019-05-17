import {
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE,
    LOAD_POST,
    LOAD_SINGLE_POST,
    LOAD_SINGLE_POST_SUCCESS,
    LOAD_SINGLE_POST_FAILURE,ADD_POST
} from '../actions/actionTypes';

const initialState = {
    posts: [],
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

        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };

        default:
            return state
    }
}