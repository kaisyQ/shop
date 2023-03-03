import React from "react"

import styled from "styled-components"

import { NavLink } from "react-router-dom"

const Wrapper = styled.div`
    box-sizing: content-box;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    width: 4rem;
    background-color: ${props => props.isCurrent ? '#ac3b61' : '#123C69'};
    color: #fff;
`

export default ({ number, isCurrent }) => {
    return (
        <>
            <NavLink to={`/blogs/${number}`}>
                <Wrapper isCurrent={isCurrent}>{ number }</Wrapper>
            </NavLink>
        </>
    )
}