import React from "react"
import styled from "styled-components"

import Card from "./Card/Card"

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`

export default () => {
    return (
        <>
            <CardsWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsWrapper>
        </>
    )
}