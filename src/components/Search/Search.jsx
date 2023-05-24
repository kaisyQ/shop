import React from "react"
import styled, { keyframes } from "styled-components"

import Input from "../Custom/Input/Input"

import * as Icon from 'react-bootstrap-icons'

const SearchWrapper = styled.div`
    position: fixed;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const SearchContainer = styled.div`
    width: 100%;
    position: relative;
`

const IconWrapper = styled.div`
    position: absolute;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
    line-height: 100%;
`
export default () => {

    const [searchVl, setSearchVl] = React.useState('')

    return (
        <>
            <SearchWrapper>
                <SearchContainer>
                    <Input fontSize={'1.8rem'} padding={'3rem 7rem 3rem 2rem'} id='header-search' placeholder='Search' value={searchVl} onChange={(ev) => {setSearchVl(ev.target.value)}}/>
                    <IconWrapper>
                        <Icon.Search color="#c74646" size={'3.5rem'} cursor='pointer' />
                    </IconWrapper>
                </SearchContainer>
            </SearchWrapper>
        </>
    )
}