import axios from 'axios';
import React from 'react'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { googleAuthThunk } from '../modules/auth';

function LoginForm() {
    const dispatch = useDispatch();

    const googleSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        dispatch(googleAuthThunk(res));
    }

    const googleFailure = (error: any) => {
        console.log(error);
        console.log("Fail!!!");
    }

    return (
        <>
            <GoogleLogin
                clientId="598478168767-8ti7r56j9f1lkeqnkil1f9c5rd9hpdic.apps.googleusercontent.com"
                buttonText="Google Sign in"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </>
    );
}

export default LoginForm;