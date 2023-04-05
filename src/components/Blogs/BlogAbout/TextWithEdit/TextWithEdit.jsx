import React from "react"

import styled from "styled-components"

import Input from './../../../Custom/Input'

import * as Icon from 'react-bootstrap-icons'

const Container = styled.div`
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
`

const Title = styled.div`
    font-size: 3rem;
    position: relative;
    text-decoration: underline;
`

const Date = styled.p`
    text-align: right;
    font-size: 1.6rem;
    text-decoration: underline;
`

const Text = styled.p`
    font-size: 2rem;
    text-indent: 5rem;
    word-spacing: .5rem;
    line-height: 3rem;
    text-align: justify;
`

const Btn = styled.button`
    display: flex;
    width: 5rem;
    height: 5rem;
    align-items: center;
    justify-content: center;
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

export default ({ text, type, setBlogItem }) => {
    
    const [inptText, setText] = React.useState("")

    const [editMode, setEditMode] = React.useState(false)

    React.useEffect(() => {
        
        setText(text)

        if (!text) setEditMode(true)
    
    }, [text, setText])

    const onTextChange = (ev) => { setText(ev.target.value) }

    const onSaveBtnClick = (ev) => {
        if (inptText) {
            setBlogItem(prev => {
                if (type === 'title') {
                    if (prev.title === inptText) return prev
                    return {
                        ...prev,
                        title: inptText
                    }
                }
                if (type === 'text') {
                    if (prev.text === inptText) return prev
                    return {
                        ...prev,
                        text: inptText
                    }
                }
                if (type === 'date') {
                    if (prev.date === inptText) return prev
                    return {
                        ...prev,
                        date: inptText
                    }
                }
            })
            setEditMode(false)
        }
    }

    return (
        <>
            {
                !editMode ? <>
                    { type === 'title' ? <Title>{ text }</Title> : null }
                    { type === 'text' ? <Text>{ text }</Text> : null }
                    { type === 'date' ? <Date>{ text }</Date> : null }
                </> : <>
                    <Container>
                        <Input value={inptText} onChange={onTextChange} />
                        <Btn onClick={onSaveBtnClick}>
                            <Icon.Check2 fill="currentColor" size={'2.5rem'} />
                        </Btn>
                    </Container>
                </>
            }
        </>
    )
}