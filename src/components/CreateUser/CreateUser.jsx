import React from "react"

import styled from "styled-components"

import Input from "../Custom/Input"
import Button from "../Custom/Button"
import { NavLink } from "react-router-dom"

const CreateUserWrapper = styled.div`
    
`

const CreateUserForm = styled.form`
    
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
                    <Input placeholder='Login' value={login} onChange={(ev) => {setLogin(ev.target.value)}}/>
                    <Input placeholder='Password' value={password} onChange={(ev) => {setPassword(ev.target.value)}} />
                    <Button>Create</Button>
                </CreateUserForm>
                <Button>
                    <NavLink to={'/admin/users'}>All users</NavLink>
                </Button>
            </CreateUserWrapper>
        </>
    )
}