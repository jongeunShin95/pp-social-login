import React from 'react'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'

function LoginForm() {

    const googleSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(res);
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
                // render={(renderProps) => (
                //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Sign in</button>
                // )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </>
    );
}

export default LoginForm;