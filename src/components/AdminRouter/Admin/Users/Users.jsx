import React from "react"
import styled from "styled-components"
import User from "./User/User"

import Button from "../../../Custom/Button"

const UsersWrapper = styled.div`
`
const UsersFooter = styled.footer`
    margin-top: 4rem;
`

export default ({ getAllUsers, users }) => {

    React.useEffect(() => {
        getAllUsers()
    }, [getAllUsers, users])


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
            <UsersFooter>
                <Button>Delete all selected users</Button>
            </UsersFooter>
            </UsersWrapper>
        </>
    )
}