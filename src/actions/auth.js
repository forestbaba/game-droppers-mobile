import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    ATTEMPT_LOGIN, 
    LOGIN_SUCCESSFUL,
    LOGIN_FAILURE,
     USERNAME_CHANGED, 
     GET_ERRORS,
    PASSWORD_CHANGED
} from './actionTypes';
// import { SecureStore } from 'expo';


export const loginUser = userdata => dispatch => {

    //   axios.post('https://game-droppers.herokuapp.com/api/users/login',userdata)
    // axios.post('http://192.168.188.255:7000/api/users/login', userdata)

    console.log('Before attempt login')
    dispatch({
        type: ATTEMPT_LOGIN
    })
    console.log('attempt login')

    // const { token } = res.data
    // console.log('returned token: ' + token);

    axios
        .post("http://10.0.3.2:7000/api/users/login", userdata)
        .then(res=> {
            // console.log('Success')
            // console.log('Token: '+JSON.stringify(res.data))

            if(res.data.token){
              
               global.authToken = res.data.token

                dispatch({
                   type: LOGIN_SUCCESSFUL,
                   payload: res.data

                   
            })
                Actions.tabbar();

                const { token } = res.data;
                // console.log('Outputed token: '+token)
                                // await SecureStore.setItemAsync('login_toking', token);

        }
           
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );

    // axios.post('http://10.0.3.2:9000/api/users/login', userdata)
    //     .then(res => {
    //      //   console.log('Value of res now: '+JSON.stringify(res))
    //         if (res.data.token) {
    //             dispatch({
    //                 type: LOGIN_SUCCESSFUL,
    //                 payload: res.data,

    //             })
    //             { res.data.token ? console.log('Token: ' + res.data.token) : console.log('Error') }
    //             Actions.home();
    //         }
    //         else {
    //             dispatch({
    //                 type: LOGIN_FAILURE

    //             })
    //             console.log('Auth Action Failure...')
    //         }

    //         console.log('getting out of attempt login')

    //     }
    //     ).catch(err => {
    //         dispatch({
    //             type: LOGIN_FAILURE
    //         })
    //     })


}
const loginSuccess = (user) => {
    dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: res.data
    })
    { res.data.token ? console.log('Token: ' + res.data.token) : console.log('Error') }
    Action.userdashboard();
}
export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text

    }
}
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text

    }
}
export const loading = () => {
    return {
        type: ATTEMPT_LOGIN,
        payload: true
    }
}