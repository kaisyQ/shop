import React from "react"
import styled from "styled-components"

import Input from "../../Custom/Input"
const SearchWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    background-color: #eee2dc;
    padding: 8rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`
const Title = styled.h3`
    
`

export default () => {

    const Search = Input({ placeholder: 'Search' })
    return (
        <>
            <SearchWrapper>
                <Title>Search</Title>
                <Search />
            </SearchWrapper>
        </>
    )
}