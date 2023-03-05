import React from "react"
import styled from "styled-components"

import { NavLink } from "react-router-dom"

import * as Icon from 'react-bootstrap-icons'

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    justify-content: space-between;
    width: 100%;
    padding: .5rem;
    color: #123C69;
    font-size: 1.7rem;
    box-shadow: 0.1rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);

    :hover {
        transform: scale(110%);
        background-color: #fff;
        color: #ac3b61;
        transition: .4s ease-in-out;
        box-shadow: 0.2rem 0.4rem 2rem 0 rgba(0, 0, 0, 0.3);
    }
`

const ItemLine = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;
`

const FieldName = styled.p`
    font-weight: 500;
    letter-spacing: .2rem;
    position: relative;
    
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: #000;
    }
`
const FieldInfo = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    display: flex;
    align-items: center;
    gap: .5rem;
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
                        <FieldInfo>
                        { roleId === 1 ? <Icon.HexagonFill /> : <Icon.Hexagon />}
                            <span>{ roleId === 1 ? 'ADMIN' : 'USER'}</span>
                        </FieldInfo>
                    </ItemLine>
                </UserWrapper>
            </NavLink>      
        </>
    )
}