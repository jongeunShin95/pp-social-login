import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { RootState } from '../modules';

function Home() {
    const { data, loading, error } = useSelector((state: RootState) => state.auth.googleAuthInfo);

    if (data === null) return <LoginForm />

    return (
        <>
            로그인 성공
        </>
    );
}

export default Home;