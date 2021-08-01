import axios from 'axios';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { RootState } from '../modules';

function Home() {
    const { data, loading, error } = useSelector((state: RootState) => state.auth.googleAuthInfo);

    const onTest = async () => {
        const auth = localStorage.getItem('auth');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        }

        const res = await axios.get('/api', config);
        console.log(res);
    }

    const logout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('profile');
        window.location.reload();
    }

    if (localStorage.getItem('profile') === null) {
        return (
            <>
                <LoginForm />
                <button onClick={onTest}>Test</button>
            </>
        );
    }

    return (
        <>
            로그인 성공
            <GoogleLogout
                clientId="598478168767-8ti7r56j9f1lkeqnkil1f9c5rd9hpdic.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
            />
            <button onClick={onTest}>Test</button>
        </>
    );
}

export default Home;