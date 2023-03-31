import React from "react"
import styled, { keyframes } from "styled-components"

import Input from "../Custom/Input"

import * as Icon from 'react-bootstrap-icons'



const SearchWrapper = styled.div`
    position: fixed;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


export default () => {

    const [searchVl, setSearchVl] = React.useState('')

    return (
        <>
            <SearchWrapper>
                <Input fontSize={'1.8rem'} padding={'3rem 2rem'} id='header-search' placeholder='Search' value={searchVl} onChange={(ev) => {setSearchVl(ev.target.value)}}/>
                <Icon.Search color="#c74646" size={'3.5rem'} cursor='pointer' />
            </SearchWrapper>
        </>
    )
}