import React from "react"
import styled, { keyframes } from "styled-components"

import Input from "../Custom/Input"

import * as Icon from 'react-bootstrap-icons'



const showSearch = keyframes`
    from { 
        min-height: 0;
        opacity: 0;
    }
    to { 
        min-height: 22rem;
        opacity: 1;

    }
`


const SearchWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    min-height: (${props => props.isOpen ? '22rem' : '0'});
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;  
    min-height: 20rem;
    width: 100vw;
    background-color: #eee2dc;
    animation-duration: .2s;
    animation-name: ${showSearch};
    animation-timing-function: ease-in-out;
    z-index: 11;
`

export default ({ isOpen, setIsOpen, setIsDark }) => {
    const [searchVl, setSearchVl] = React.useState('')

    const exitClick = (ev) => {
        setIsOpen(false)
        setIsDark(false)
    }

    return (
        <>
            <SearchWrapper isOpen={isOpen}>
                <Input id='header-search' placeholder='Search' value={searchVl} onChange={(ev) => {setSearchVl(ev.target.value)}}/>
                <Icon.Search size={'2.5rem'} cursor='pointer' />
                <Icon.XLg onClick={exitClick} size={'2.5rem'} cursor='pointer' />
            </SearchWrapper>
        </>
    )
}