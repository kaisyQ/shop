import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"


import SessionItemContainer from "./SessionItem/SessionItemContainer"

import Input from "../Custom/Input"


const EditUserWrapper = styled.div`
    padding: .7rem;
`

const Title = styled.h2`
    text-align: left;
    letter-spacing: .2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
`

const Information = styled.div`
    font-size: 1.6rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #123C69;
    color: #fff;
    padding:  1rem;
    box-shadow: 0.3rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);

`

const ItemWrapper = styled.div`
    letter-spacing: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 2rem;
`

const FieldName = styled.p`
    font-weight: 500;
    line-height: 4rem;
    position: relative;

    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: #fff;
    }
`
const FieldInfo = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
`


const Btn = styled.button`
    width: 100%;
    padding: 1.5rem 3rem;
    background: brown;

    
    color: #FFF;
    opacity: ${props => !props.isEditMode && props.isEditMode !== undefined ? '50%' : '1'};

    :not(:disabled):hover {
        transition: .3s ease-in-out;
        background-color: #123C69;
        color: brown;
    }
    box-shadow: 0.1rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
`

const SessionsWrapper = styled.div`
    margin-top: 2rem;
`

export default ({ user, getUser, deleteAllSessions }) => {

    
    const { id } = useParams()

    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [isEditMode, setIsEditMode] = React.useState(false)

    React.useEffect(() => {

        if(id) {
            getUser(id)
        }

    }, [id, getUser])


    React.useEffect(() => {

        if (user) {
            setLogin(user.login)
            setPassword(user.password)
        }

    }, [user])

    
    const onDeleteAllSessionsClick = (ev) => {
        deleteAllSessions(user.id)
    } 


    if (!user) {
        return <></>
    }

    return (
        <>
            <EditUserWrapper>
                <Title>User information</Title>
                <Information>
                    <ItemWrapper>
                        <FieldName>Id</FieldName>
                        <FieldInfo>{ user.id }</FieldInfo>
                    </ItemWrapper>
                    <ItemWrapper>
                        <FieldName>Login</FieldName>
                        {
                            !isEditMode ? <FieldInfo>{ login }</FieldInfo> : 
                                <Input id={'edit-login'} padding={'.8rem'} onChange={(ev) => { setLogin(ev.target.value) }} type="text" value={login}/>
                        }
                    </ItemWrapper>
                    <ItemWrapper>
                        <FieldName>Password</FieldName>
                        {
                            !isEditMode ? <FieldInfo>{ password }</FieldInfo> : 
                                <Input id={'edit-password'} padding={'.8rem'} onChange={(ev) => { setPassword(ev.target.value) }} type="text" value={password}/>
                        }
                    </ItemWrapper>
                    <ItemWrapper>
                        <FieldName>Role</FieldName>
                        {
                            !isEditMode ? <FieldInfo>{ user.roleId === 1 ? 'ADMIN' : 'USER' }</FieldInfo> : 
                                <Input padding={'.8rem'} onChange={() => {}} type="text" value={ user.roleId === 1 ? 'ADMIN' : 'USER' }/>
                        }
                    </ItemWrapper>
                </Information>


                {
                    user.roleId === 1 ? <></> : <>
                        <ButtonsWrapper>
                            <Btn onClick={(ev) => {setIsEditMode((prev) => !prev)}}>
                                { !isEditMode ? 'Edit User Informatiion' : 'Cancel Editing'}
                            </Btn>
                            <Btn isEditMode={isEditMode} disabled={!isEditMode} onClick={() => {console.log('click')}}>
                                Submit
                            </Btn>
                        </ButtonsWrapper>
                    </>
                }


                <Title>User sessions</Title>
                {
                    user.roleId === 1 ? <></> : <>
                        <Btn onClick={onDeleteAllSessionsClick}>Delete all sessions</Btn>
                    </>
                }
                <SessionsWrapper>
                    {
                        user.session.map((session, index) => 
                            <SessionItemContainer roleId={user.roleId} index={index} expiresAt={session.expiresAt} id={session.id} />)
                    }
                </SessionsWrapper>
            </EditUserWrapper>
        </>
    )
}