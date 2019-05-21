import { LOGIN_USER, LOGIN_FAILURE, 
    LOGIN_SUCCESSFUL, USERNAME_CHANGED, ADD_POST,
    PASSWORD_CHANGED, 
    ATTEMPT_LOGIN} from '../actions/actionTypes';
    import isEmpty from '../util/is-empty'

const initialState = {
    user: {},
    errors: '',
    username :'',
    password:'',
    loading: false,
    signInError: false,
    isAuthenticated: false
}

export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
         case USERNAME_CHANGED:
            return {...state, username: action.payload}
         case PASSWORD_CHANGED:
            return {...state, password: action.payload}

        case LOGIN_SUCCESSFUL:
            return {
                ...state, isAuthenticated: !isEmpty(action.payload),
                user: action.payload, errors: '',
                loading:false,
                 signInError:false

            }
        case LOGIN_FAILURE:
            return {
                ...state,
                errors: 'Login Failed', loading: false,signInError: true
            }
        case ATTEMPT_LOGIN:
            return {
                ...state,
                loading: true,
                signInError:false
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