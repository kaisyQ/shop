import React from "react"

import styled, { keyframes } from "styled-components"

import { NavLink } from "react-router-dom"

const btnsShow = keyframes`
    from  {
        visibility: hidden;
        opacity: 0;
    }

    to {
        visibility: visible;
        opacity: 1;
    }
`

const btnsHide = keyframes`
    from  {
        visibility: visible;
        opacity: 1;
    }

    to {
        visibility: hidden;
        opacity: 0;
    }
`

const UserBtnsList = styled.ul`
    position: absolute;
    
    top: 100%;
    right: 0;

    font-weight: 500;

    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    
    min-width: 15rem;

    padding: .5rem;

    background: #fc8507;

    visibility: ${props => props.clicked ? 'visible' : 'hidden'};
    opacity: ${props => props.clicked ? 1 : 0};
    
    animation-name: ${props => props.clicked ? btnsShow : btnsHide};
    animation-duration: .3s;

    z-index: 10;
    

`
const UserBtnsListItem = styled.li`
    padding: 1rem 3rem;
    cursor: pointer;

    :hover {
        background: #fff;
        color: #fc8507;
        border-radius: 0;
        transition: .3s ease-in-out;
    }
    :not(:hover) {
        background: #fc8507;
        color: #fff;
        border-radius: 3rem;
        transition: .3s ease-in-out;
    }
`


export default ({ clicked, setClicked }) => {

    const onBtnClick = (ev) => {
        setClicked(prev => !prev)
    }


    return (
        <>
            <UserBtnsList clicked={clicked}>
                <NavLink to={'login'}>
                    <UserBtnsListItem onClick={onBtnClick}>Log in</UserBtnsListItem>
                </NavLink>
            </UserBtnsList>
        </>
    )
}