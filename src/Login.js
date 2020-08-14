import React  from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth,provider } from "./firebase";
import { useStateValue } from "./Stateprovider";
import { actionTypes } from './reducer';
function Login() {
    const [state,dispatch] =useStateValue();
    
    const signIn = () =>{
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                });
            })
            .catch(error => {
                alert(error.message);
            })
    };



    return (
        <div className="login">
            <div className="login__container">
                <img src="https://user-images.githubusercontent.com/38127345/90271517-93c82d00-de79-11ea-8e4d-48b3385616aa.png" alt="">
                </img>
                <h1>Sign in to Slack clone</h1>
            <p>Vishodhan.slack.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>   
        </div>
    )
}

export default Login;
