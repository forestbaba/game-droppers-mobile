import { LOAD_PROFILE, LOAD_POST_FAILURE, LOAD_PROFILE_SUCCESS, BASE_URL } from './actionTypes'
import axios from 'axios';


export const loadProfile = () => dispatch => {
    dispatch({
        type: LOAD_PROFILE
    })

    axios.get(`${BASE_URL}/api/profile`, { headers: { "Authorization": `${global.authToken}` } }).then(res => {
        if (res.data) {
            dispatch({
                type: LOAD_PROFILE_SUCCESS,
                payload: res.data
            })
        }
    })
        .catch(err => dispatch({
            type: LOAD_POST_FAILURE,
            error: err.response.data
        }))
}
