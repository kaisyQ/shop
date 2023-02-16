import React from "react"
import styled from "styled-components"

import { NavLink } from "react-router-dom"

const UsersContainer = styled.div`
    
`

const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export default ({ id, login, password, roleId }) => {
    return (
        <>
            <UsersContainer>
                <UserWrapper>
                    <span>#</span>
                    <p>Id</p>
                    <p>Login</p>
                    <p>Password</p>
                    <p>Role</p>
                </UserWrapper>
                <UserWrapper>
                    <input type="checkbox" />
                    <NavLink to={`/admin/users/${id}`}><p>{ id }</p></NavLink>
                    <NavLink to={`/admin/users/${id}`}><p>{ login }</p></NavLink>
                    <NavLink to={`/admin/users/${id}`}><p>{ password }</p></NavLink>
                    <NavLink to={`/admin/users/${id}`}><p>{ roleId === 1 ? 'ADMIN' : 'USER'}</p></NavLink>
                </UserWrapper>
                <hr />
            </UsersContainer>
        </>
    )
}