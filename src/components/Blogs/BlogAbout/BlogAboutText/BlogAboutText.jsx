import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
    font-size: 2.4rem;
    text-align: justify;
    text-indent: 5rem;
    margin-bottom: 2rem;
    line-height: 5rem;
    letter-spacing: -.1rem;
`

export default ({ text, setArrOfBlogStruct }) => {
    return (
        <>
            <Wrapper>{ text }</Wrapper>
        </>
    )
}