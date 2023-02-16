import React from "react"
import styled from "styled-components"


import LoginContainer from "./Login/LoginConteiner"
import AdminHeaderContainer from "./Admin/AdminHeader/AdminHeaderContainer"
import UserContainer from "./Admin/Users/UserContainer"

import Users from "./Admin/Users/Users"

import { Routes, Route, useLocation } from "react-router-dom"

const MainContainer = styled.div`
  max-width: 33rem;
  margin: 0 auto;
  z-index: 1;
`



export default ({ checkMe }) => {

    const { pathname } = useLocation()

    React.useEffect(() => {
        checkMe()
    }, [checkMe])
    
    return (
        <>
            <MainContainer>
                { pathname === '/admin/login' ? <></> : <AdminHeaderContainer />}
                <Routes>
                    <Route path='login' element={<LoginContainer />} />
                    <Route path="users" element={<UserContainer />} />
                    <Route path="users/:id" element={<></>} />
                </Routes>
            </MainContainer>
        </>
    )
}