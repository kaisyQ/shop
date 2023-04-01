import React from "react"
import styled from "styled-components"

import Filter from "./Filter/Filter"
import CardsContainer from "./Cards/CardsContainer"

import Title from "../Custom/Title"

const Wrapper = styled.div`
    
`

const TitleWrapper = styled.div`
    text-align: left;
    margin-bottom: 2rem;
`

export default () => {
    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title>Catalog</Title>
                </TitleWrapper>
                <Filter />
                <CardsContainer />
            </Wrapper>
        </>
    )
}