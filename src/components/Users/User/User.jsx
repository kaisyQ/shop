import React from "react"
import styled from "styled-components"

import { NavLink } from "react-router-dom"


const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    justify-content: space-between;
    border: .1rem solid #000;
    border-radius: .5rem;
    padding: .5rem;
    
    font-size: 1.7rem;
`

const ItemLine = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;
`

const FieldName = styled.p`
    font-weight: 500;
`
const FieldInfo = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
`

export default ({ id, login, password, roleId }) => {
    return (
        <>
            <NavLink to={`/admin/users/${id}`}>
                <UserWrapper>
                    <ItemLine>
                        <FieldName>Id : </FieldName>
                        <FieldInfo>{ id }</FieldInfo>
                    </ItemLine>
                    <ItemLine>
                        <FieldName>Login : </FieldName>
                        <FieldInfo>{ login }</FieldInfo>
                    </ItemLine>
                    <ItemLine>
                        <FieldName>Password : </FieldName>
                        <FieldInfo>{ password }</FieldInfo>
                    </ItemLine>
                    <ItemLine>
                        <FieldName>Role : </FieldName>
                        <FieldInfo>{ roleId === 1 ? 'ADMIN' : 'USER'}</FieldInfo>
                    </ItemLine>
                </UserWrapper>
            </NavLink>      
        </>
    )
}