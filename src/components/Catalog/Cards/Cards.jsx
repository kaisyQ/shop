import React from "react"
import styled from "styled-components"

import CardContainer from "./Card/CardContainer"

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 5rem;
`

export default ({ items }) => {
    return (
        <>
            <CardsWrapper>
            {
                items.map(item => <CardContainer key={item.id} id={item.id} count={item.count} name={item.name} imageSrc={item.imagesSrc[0]} />)
            }
            </CardsWrapper>
        </>
    )
}