import React from "react"
import styled, { keyframes } from "styled-components"

import Input from "../../Custom/Input"

import * as Icon from 'react-bootstrap-icons'


const showSearch = keyframes`
    from { transform: translateY(-100%) }
    to { transform: translateY(0); }
`

const SearchWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;  
    min-height: 22rem;
    width: 100vw;
    background-color: #eee2dc;
    animation-duration: .3s;
    animation-name: ${showSearch};
`

export default ({ isOpen, setIsOpen }) => {
    const [searchVl, setSearchVl] = React.useState('')

    return (
        <>
        <SearchWrapper isOpen={isOpen}>
            <Input  placeholder='Search' value={searchVl} onChange={(ev) => {setSearchVl(ev.target.value)}}/>
            <Icon.Search size={'2.5rem'} cursor='pointer' />
            <Icon.XLg onClick={(ev) => {setIsOpen(false)}} size={'2.5rem'} cursor='pointer' />
        </SearchWrapper>
        </>
    )
}