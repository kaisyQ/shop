import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"


import SessionItemContainer from "./SessionItem/SessionItemContainer"


const EditUserWrapper = styled.div`
`

const Title = styled.h2`
    text-align: left;
    letter-spacing: .3rem;
    margin-bottom: 2rem;
    font-size: 2rem;
`

const Information = styled.div`
    font-size: 1.6rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ItemWrapper = styled.div`
    letter-spacing: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .1rem solid #b9b4b4;
`

const FieldName = styled.p`
    font-weight: 500;
    line-height: 3rem;
`
const FieldInfo = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
`

const Input = styled.input`
    border: 0;
    padding: .8rem;
    font-size: 1.2rem;
    font-weight: 500;
    background: #fff;
`

const Btn = styled.button`
    width: 100%;
    padding: 1.5rem 3rem;
    background: brown;
    color: #FFF;
    opacity: ${props => !props.isEditMode && props.isEditMode !== undefined ? '50%' : '1'};
    border-radius: .7rem;
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
                        <FieldName>Id : </FieldName>
                        <FieldInfo>{ user.id }</FieldInfo>
                    </ItemWrapper>
                    <ItemWrapper>
                        <FieldName>Login : </FieldName>
                        {
                            !isEditMode ? <FieldInfo>{ login }</FieldInfo> : 
                                <Input onChange={(ev) => { setLogin(ev.target.value) }} type="text" value={login}/>
                        }
                    </ItemWrapper>
                    <ItemWrapper>
                        <FieldName>Password : </FieldName>
                        {
                            !isEditMode ? <FieldInfo>{ password }</FieldInfo> : 
                                <Input onChange={(ev) => { setPassword(ev.target.value) }} type="text" value={password}/>
                        }
                    </ItemWrapper>
                    <ItemWrapper>
                        <FieldName>Role : </FieldName>
                        {
                            !isEditMode ? <FieldInfo>{ user.roleId === 1 ? 'ADMIN' : 'USER' }</FieldInfo> : 
                                <Input onChange={() => {}} type="text" value={ user.roleId === 1 ? 'ADMIN' : 'USER' }/>
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