import React from "react";

import Input from '../Custom/Input/Input';
import Button from "components/Custom/Button/Button";
import Preloader from "components/Ui/Preloader/Preloader";

import { LoginWrapper, Title, InputWrapper, BtnWrapper } from "./AuthStyles";

import { AuthConnectedProps } from "./AuthContainer";
import { Navigate } from "react-router-dom";

import { LOADING, FAILED, IDLE } from "types/types";


const Auth: React.FC<AuthConnectedProps> = ({ isAuth, fetchToLogin, loading, error }) => {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        fetchToLogin({ login, password });
    }

    const onLoginChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLogin(ev.target.value);
    }

    const onPasswordChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(ev.target.value);
    }

    if (isAuth) {
        return <Navigate to={'/admin'} />;
    }

    return (
        <>
            { loading === LOADING ? <Preloader /> : null }
            <LoginWrapper onSubmit={submitForm}>
                <Title>Sign into your working account</Title>
                <InputWrapper>
                    <Input 
                        width="100%" 
                        id='auht-login' 
                        placeholder='Login' 
                        value={login} 
                        onChange={onLoginChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input 
                        width="100%" 
                        id='auth-password' 
                        placeholder='Password' 
                        value={password} 
                        onChange={onPasswordChange}
                    />
                </InputWrapper>
                <BtnWrapper>
                    <Button disabled={loading===LOADING} isReverse={true}>Sign in</Button>
                </BtnWrapper>
            </LoginWrapper>
        </>
    );
} 

export default Auth;