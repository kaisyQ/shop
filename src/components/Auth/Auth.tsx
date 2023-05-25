import React from "react";

import Input from '../Custom/Input/Input';
import Button from "components/Custom/Button/Button";

import { Navigate } from "react-router-dom";

import { 
    LoginWrapper, Title, InputWrapper, AuthFooterWrapper, FooterTextWrapper, FooterText, BtnWrapper
} from "./AuthStyles";

import { AuthConnectedProps } from "./AuthContainer";


const Auth: React.FC<AuthConnectedProps> = ({ isAuth, signIn }) => {

    const [isLogin, setIsLogin] = React.useState(true);

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {

    })

    const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    
        if(isLogin) {
            signIn(login, password);
        }
    }

    if(isAuth) return <Navigate to='/users' />;

    return (
        <>
            <LoginWrapper onSubmit={submitForm}>          
                <Title>Sign into your account</Title>
                {
                    !isLogin ?
                        <InputWrapper>
                            <Input width="100%"  id='login-email' placeholder='Email' value={email} onChange={(ev) => { setEmail(ev.target.value) }}/>
                        </InputWrapper> : <></>
                }
                <InputWrapper>
                    <Input width="100%" id='login-login' placeholder='Login' value={login} onChange={(ev) => { setLogin(ev.target.value) }}/>
                </InputWrapper>
                <InputWrapper>
                    <Input width="100%" id='login-password' placeholder='Password' value={password} onChange={(ev) => { setPassword(ev.target.value) }}/>
                </InputWrapper>
                <Button isReverse={true}>{isLogin ? 'Sign in' : 'Create'}</Button>
            </LoginWrapper>
            <AuthFooterWrapper>
                <FooterTextWrapper>
                    <FooterText>{isLogin  ? 'There is no profile on our website' : 'Already have an account'}</FooterText>
                </FooterTextWrapper>
                    <BtnWrapper>
                        <Button onClick={(ev) => {setIsLogin(prev => !prev)}}>{isLogin  ? 'Register' : 'Sign in'}</Button>
                    </BtnWrapper>
            </AuthFooterWrapper>
        </>
    );
} 

export default Auth;