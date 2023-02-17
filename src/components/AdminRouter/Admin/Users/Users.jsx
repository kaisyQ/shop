import React from "react"
import styled from "styled-components"
import User from "./User/User"

import Button from "../../../Custom/Button"

const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

const UsersFooter = styled.footer`
    margin-top: 4rem;
`

export default React.memo(({ getAllUsers, users }) => {

    React.useEffect(() => {
        getAllUsers()
    }, [getAllUsers])


    return (
        <>
            <UsersWrapper>
            {
                users.map(user => <User key={user.id} 
                    id={user.id} 
                    login={user.login} 
                    password={user.password} 
                    roleId={user.roleId}
                />)
            }
            </UsersWrapper>
        </>
    )
})