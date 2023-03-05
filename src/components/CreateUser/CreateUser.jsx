import React from "react"

import styled from "styled-components"

import Input from "../Custom/Input"
import Button from "../Custom/Button"
import { NavLink } from "react-router-dom"

const CreateUserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    text-align: left;
`

const CreateUserForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

export default ({ createUserThunk }) => {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    const formSubmit = (ev) => {
        ev.preventDefault()
        createUserThunk(login, password)
    }

    return (
        <>
            <CreateUserWrapper>
                <CreateUserForm onSubmit={formSubmit}>
                    <Input id={'create-login'} placeholder='Login' value={login} onChange={(ev) => {setLogin(ev.target.value)}}/>
                    <Input id={'create-password'} placeholder='Password' value={password} onChange={(ev) => {setPassword(ev.target.value)}} />
                    <Button>Create</Button>
                </CreateUserForm>
                <NavLink to={'/admin/users'}>
                    <Button>All users</Button>
                </NavLink>
            </CreateUserWrapper>
        </>
    )
}