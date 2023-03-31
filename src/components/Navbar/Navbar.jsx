import React from "react"

import { NavLink } from "react-router-dom"

import styled from "styled-components"

const Wrapper = styled.nav`
    position: relative;
    width: 100%;
    column-gap: 2rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        border-bottom: .1rem solid #ab5f08;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`
const Item =  styled.div`
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
    text-transform: capitalize;
    text-align: left;

    :hover{
        color: #993255;
        text-decoration: underline;
    }
`

export default () => {
    return (
        <>
            <Wrapper>
                <NavLink to={'/'}><Item>Home</Item></NavLink>
                <NavLink to={'/catalog'}><Item>Catalog</Item></NavLink>
                <NavLink to={'/contact'}><Item>Contact</Item></NavLink>
                <NavLink to={'/blogs'}><Item>Blog</Item></NavLink>
            </Wrapper>
        </>
    )
}