import axios from 'axios';
import {
    LOAD_POST,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE,
    LOAD_SINGLE_POST,
    LOAD_SINGLE_POST_SUCCESS,
    LOAD_SINGLE_POST_FAILURE,ADD_POST
} from './actionTypes';

const Base_url = "http://10.0.3.2:7000"


export const loadPost = () => dispatch => {

    dispatch({
        type: LOAD_POST
    })

    console.log('The token i think i can get: '+`${global.authToken}`)

    axios
        .get(`${Base_url}/api/posts`, { headers: { "Authorization": `${global.authToken}` } })
        .then(res => {
            console.log('Success')
            if(res.data){
                dispatch({
                        type: LOAD_POST_SUCCESS,
                        payload: res.data
                })
            }

        })
        .catch(err =>
            dispatch({
                type: LOAD_POST_FAILURE,
                payload: err.response.data
            })
        );


}

export const loadSinglePost = id => dispatch => {

    dispatch({
        type: LOAD_SINGLE_POST
    })

    console.log('The  id i need: ' + id)

    axios
        .get(`${Base_url}/api/posts/findPost/${id}`, { headers: { "Authorization": `${global.authToken}` } })
        .then(res => {
            console.log('fetch single post Success')
            if (res.data) {
                dispatch({
                    type: LOAD_SINGLE_POST_SUCCESS,
                    payload: res.data
                })
            }

        })
        .catch(err =>
            dispatch({
                type: LOAD_SINGLE_POST_FAILURE,
                payload: err.response.data
            })
        );


}

export const loadingPost =()=>{
    return{
          type:LOAD_POST
    }
  
}


export const addPost = postData => dispatch => {
    dispatch(clearErrors());

    axios
        .post("/api/posts", postData)
        .then(res =>
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};