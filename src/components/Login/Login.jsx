import React from "react"
import styled from "styled-components"


import Input from '../Custom/Input'
import Button from '../Custom/Button'

import { Navigate } from "react-router-dom"

const LoginWrapper = styled.form`
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
`

const Title = styled.h2`
    font-size: 2.4rem;
    text-align: left;
`

export default ({ isAuth, signIn }) => {

    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    React.useEffect(() => {

    })

    const submitForm = async (ev) => {
        ev.preventDefault()
        signIn(login, password)
    }

    if(isAuth) return <Navigate to='/admin/users' /> 

    return (
        <>
            <LoginWrapper onSubmit={submitForm}>          
                <Title>Sign into your working account</Title>
                <Input id='login-login' placeholder='Login' value={login} onChange={(ev) => { setLogin(ev.target.value) }}/>
                <Input id='login-password' placeholder='Password' value={password} onChange={(ev) => { setPassword(ev.target.value) }}/>
                <Button>Sign in</Button>
            </LoginWrapper>
        </>
    )
} 