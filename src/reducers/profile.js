import {LOAD_PROFILE,LOAD_PROFILE_FAILURE,LOAD_PROFILE_SUCCESS} from '../actions/actionTypes'

const initialState={
    profile:{},
    loading: false,
    error:''
}

export default function(state=initialState,action){

    switch(action.type){
        case LOAD_PROFILE:
        return{
            ...state, loading:true
        }

        case LOAD_PROFILE_SUCCESS:
        return{
            ...state, profile: action.payload, loading: false
        }

        case LOAD_PROFILE_FAILURE:
            return{
                ...state, loading:false,error: 'Error Loading profile'
        
        }

        default:
        return state
    }
    
}