import React from "react"
import styled from "styled-components"

const CounterWrapper = styled.div`
    display: flex;
    gap: .1rem;
`

const BlockWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 5rem;
`

export default () => {
    const [ count, setCount ] = React.useState(1)

    return (
        <>
            <CounterWrapper>
                <BlockWrapper onClick={(ev) => {setCount((prev) => prev - 1)}}>&ndash;</BlockWrapper>
                <BlockWrapper>{ count }</BlockWrapper>
                <BlockWrapper onClick={(ev) => {setCount((prev) => prev + 1)}}>&#43;</BlockWrapper>
            </CounterWrapper>
        </>
    )
}