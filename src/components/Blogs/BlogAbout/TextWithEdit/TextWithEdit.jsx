import React from "react"

import styled from "styled-components"

import Input from '../../../Custom/Input/Input'
import EditButton from "../../../Custom/EditButton/EditButton"

import * as Icon from 'react-bootstrap-icons'

const Container = styled.div`
    display: flex;
    column-gap: 3rem;
    align-items: center;
    
`

const Title = styled.div`
    font-size: 3rem;
    position: relative;
    text-decoration: underline;
    white-space: normal;
`


const Text = styled.p`
    position: relative;
    
    font-size: 2rem;
    text-indent: 5rem;
    word-spacing: .5rem;
    line-height: 3rem;
    text-align: justify;
    white-space: normal;
`

const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    
    width: 5rem;
    height: 5rem;

    :hover {
        background: #b42525;
        color: #fff;
        transition: .3s ease-in-out;
    }

    :not(:hover) {
        background: #fff;
        color: #b42525;
        transition: .3s ease-in-out;
    }
`

export default ({ text, type, dispatch, action, isEditMode, editAction }) => {
    const onTextChange = (ev) => { dispatch({ type: action, payload: ev.target.value }) }

    const onSaveBtnClick = (ev) => { dispatch({ type: editAction, payload: false }) }

    const editModeOn = (ev) => {
        dispatch({ type: editAction, payload: true })
    }
    return (
        <>
            {
                !isEditMode ? <>
                    
                    { 
                        type === 'title' ? <>
                            <Title>
                                <EditButton onClick={editModeOn} />
                                { text }
                            </Title> 
                        </> : null 
                    }
                    
                    { type === 'text' ? <>
                            <div style={{position: 'relative'}}>
                                <EditButton onClick={editModeOn} />
                                <Text>
                                    { text }
                                </Text> 
                            </div>
                        </> : null 
                    }
                    
                </> : <>
                    <Container>
                        
                        <Input 
                            placeholder={type[0].toUpperCase()+type.slice(1)} 
                            value={text} 
                            onChange={onTextChange} 
                        />
                        
                        <Btn onClick={onSaveBtnClick}>
                            <Icon.Check2 fill="currentColor" size={'2.5rem'} />
                        </Btn>
                    
                    </Container>
                </>
            }
        </>
    )
}