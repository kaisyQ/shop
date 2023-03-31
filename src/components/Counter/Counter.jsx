import React from "react"
import styled from "styled-components"

const CounterWrapper = styled.div`
    display: flex;
    column-gap: .1rem;
`

const BlockWrapper = styled.button`
    display: block;
    width: ${props =>props.size ? props.size : '3rem'};
    height: ${props =>props.size ? props.size : '3rem'};
    background-color: ${props =>props.background ? props.background : '#000'};
    color: ${props =>props.color ? props.color : '#fff'};
    text-align: center;
    line-height: 3rem;
`

const ValueWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 3rem;
`

export default (props) => {
    const [ count, setCount ] = React.useState(1)

    const { productCount } = props

    const minusClick = (ev) => {
        if (count===1) return
        setCount((prev) => prev - 1)
    } 

    const plusClick = (ev) => {
        if (count===productCount) return
        setCount((prev) => prev + 1)
    }

    return (
        <>
            <CounterWrapper>
                <BlockWrapper {...props} onClick={minusClick}>&ndash;</BlockWrapper>
                <ValueWrapper>{ count }</ValueWrapper>
                <BlockWrapper {...props} onClick={plusClick}>&#43;</BlockWrapper>
            </CounterWrapper>
        </>
    )
}