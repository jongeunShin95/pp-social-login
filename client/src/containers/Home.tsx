import axios from 'axios';
import React from 'react';
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

    if (data === null) {
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
            <button onClick={onTest}>Test</button>
        </>
    );
}

export default Home;