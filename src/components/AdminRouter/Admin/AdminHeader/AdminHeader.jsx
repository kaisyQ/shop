import React from "react"
import styled from "styled-components"

import { NavLink } from "react-router-dom"

const AdminHeaderWrapper = styled.header`
    padding: 3rem;
`

const HeaderLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-decoration: underline;
    font-size: 2rem;
    margin-bottom: 2rem;
`


export default ({ roleId }) => {
    return (
        <>
            <AdminHeaderWrapper>
                <HeaderLinkWrapper>
                    {roleId === 1 && <NavLink to='/admin/users'>Users</NavLink>}
                    <NavLink to='/admin/products'>Products</NavLink>
                    <NavLink to='/admin/posts'>Posts</NavLink>
                </HeaderLinkWrapper>
                <hr />
            </AdminHeaderWrapper>
        </>
    )
}

