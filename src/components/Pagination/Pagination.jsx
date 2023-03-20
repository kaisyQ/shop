import React from "react"

import styled from "styled-components"

import PageButton from "./PageButton/PageButton"

const Wrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    a:not(:last-child) {
        border-right: .2rem #fff solid;
    }
`

export default ({ count, pageId }) => {

    const pageNumbers = []

    for (let number = 1; number <= count; ++number) {
        pageNumbers.push(number)
    }

    return (
        <>
            <Wrapper>
            {
                pageNumbers.map((number, index) => <PageButton key={index} isCurrent={pageId === number} number={number} />)
            }
            </Wrapper>
        </>
    )
}