import React from "react"
import styled from "styled-components"
import User from "./User/User"


const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
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