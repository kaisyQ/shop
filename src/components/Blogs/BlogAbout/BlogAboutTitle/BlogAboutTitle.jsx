import React from "react"

import styled from "styled-components"

import Title from "../../../Custom/Title"
import Input from "../../../Custom/Input"

import * as Icon from 'react-bootstrap-icons'

const Wrapper = styled.div`
    display: ${props => props.isTitle ? 'flex': 'block'};
    margin: ${props => props.isTitle ? '0 0 2rem 2rem': '0 0 2rem 0'};
    font-size: ${props => props.isTitle ? '3.5rem': '2.4rem'};
    text-align: ${props => props.isTitle ? null : 'justify'};
    text-indent: ${props => props.isTitle ? null : '5rem'};
    line-height: ${props => props.isTitle ? null : '5rem'};
    letter-spacing: ${props => props.isTitle ? null : '-.1rem'};
`

const ItemWrapper = styled.div`
    width: 100%;
    display: flex;
    column-gap: 2rem;
    align-items: center;
`

const Btn = styled.div`
    height: 5rem;
    line-height: 5rem;
    width: 5rem;
    padding: 1rem;
    
    :hover {
        background: #fc8507;
        border-radius: 50%;
        transition: .2s ease-in-out;
        color: #fff;
    }

    :not(:hover) {
        background: #fff;
        transition: .2s ease-in-out;
        color:#b42525;
    }
`

export default ({ text, type, setArrOfBlogStruct, id }) => {
    
    const [isEditMode, setIsEditMode] = React.useState(false)
    
    const [inptText, setInptText] = React.useState("") 
    
    React.useEffect(() => {
        
        if (!text) {
            setIsEditMode(true)
            return
        }

        setInptText(text)

    }, [text, setIsEditMode])

    const onTextChange = (ev) => { setInptText(ev.target.value) }

    const submitClick = (ev) => {
        if (inptText) {
            setArrOfBlogStruct(prevArr => prevArr.map((item, index) => {
                if(index === id) {
                    return {...item, text: inptText}
                }
                return item
            }))
        }
        setIsEditMode(false)
    }

    const removeClick = (ev) => {
        setArrOfBlogStruct(prevArr => prevArr.filter((item, index) => index != id))
    }

    const editModeOnClick = (ev) => {
        setIsEditMode(true)
    }

    return (
        <>
            <Wrapper isTitle={type==='title'}>
            {
                isEditMode ? <>
                    <ItemWrapper>
                        <Input padding={'1.8rem 7rem 1.8rem 2.4rem'} value={inptText} onChange={onTextChange} />
                        <Btn onClick={removeClick}>
                            <Icon.XLg size={'3rem'} fill="currentColor" cursor={'pointer'}/>
                        </Btn>
                        <Btn onClick={submitClick}>
                            <Icon.Check2 size={'3rem'} fill="currentColor" cursor={'pointer'}/>
                        </Btn>
                    </ItemWrapper>
                </>
                : 
                <>
                    <ItemWrapper>
                        <Title fontSize={'3.5rem'}>{ text }</Title>
                        <Btn onClick={editModeOnClick}>
                            <Icon.PencilSquare size={'3rem'} fill="currentColor" cursor={'pointer'}/>
                        </Btn>
                    </ItemWrapper>
                </>
            }
            </Wrapper>
        </>
    )
}