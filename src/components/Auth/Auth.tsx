import React from "react";

import Input from '../Custom/Input/Input';
import Button from "components/Custom/Button/Button";

import { 
    LoginWrapper, Title, InputWrapper, BtnWrapper
} from "./AuthStyles";

import { AuthConnectedProps } from "./AuthContainer";
import { Navigate } from "react-router-dom";


const Auth: React.FC<AuthConnectedProps> = ({ isAuth, setAuthData }) => {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        setAuthData({ isAuth: true, login: 'admin', id: 1 });
    }

    const onLoginChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLogin(ev.target.value)
    }

    const onPasswordChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(ev.target.value)
    }

    if (isAuth) {
        return <Navigate to={'/admin'} />;
    }

    return (
        <>
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
                    <Button isReverse={true}>Sign in</Button>
                </BtnWrapper>
            </LoginWrapper>
        </>
    );
} 

export default Auth;