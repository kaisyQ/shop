import React from "react"
import styled from "styled-components"


import Input from '../Custom/Input'
import Button from '../Custom/Button'


import { Navigate } from "react-router-dom"

const LoginWrapper = styled.form`
    padding: 2rem;
    gap: 3rem;
    text-align: left;
    max-width: 40rem;
`

const Title = styled.h2`
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
    font-weight: 500;
    display: inline-flex;
    color: #b42525;
    font-style: italic;

    position:relative;
    
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: .1rem solid #000;
    }
`
const InputWrapper = styled.div`
    margin: 3rem 0;
`

const AuthFooterWrapper = styled.div`
    
`

const FooterTextWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    ::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        border-bottom: .1rem solid black;
        z-index: -1;
    }
`

const FooterText = styled.p`
    font-size: 1.8rem;
    letter-spacing: .1rem;
    text-align: center;
    background: white;
    font-style: italic;

`

const BtnWrapper = styled.div`
    padding: 2rem;
`

export default ({ isAuth, signIn }) => {

    const [isLogin, setIsLogin] = React.useState(true)

    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    React.useEffect(() => {

    })

    const submitForm = async (ev) => {
        ev.preventDefault()
    
        if(isLogin) {
            signIn(login, password)
        }
    }

    if(isAuth) return <Navigate to='/users' /> 

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
    )
} 