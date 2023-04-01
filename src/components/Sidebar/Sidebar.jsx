import React from "react"
import styled, { keyframes } from "styled-components"

import * as Icon from 'react-bootstrap-icons'

import { NavLink } from "react-router-dom"

const openSidebar = keyframes`
    from { width: 0 }
    to { 
        @media only screen and (max-width: 76.8rem){
            width: ${props => props.isOpen ? '40rem' : '0'};
        }
        
        @media only screen and (max-width: 33rem){
            width: ${props => props.isOpen ? '30rem' : '0'};
        }
    }
    
`

const hideItems = keyframes`
    from { opacity: 1 }
    to { opacity: 0 }
`

const showItems = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }

`

const SidebarWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100vh;
    background-color: white;
    animation-duration: 0.3s;
    animation-name: ${openSidebar};
    z-index: 10;
    
    @media only screen and (max-width: 1200px) {
        display: none;
    }

    @media only screen and (max-width: 768px){
        width: ${props => props.isOpen ? '60%' : '0'};
        display: block;
    }
    
    @media only screen and (max-width: 330px){
        width: ${props => props.isOpen ? '60%' : '0'};
        display: block;
    }
`


const ListWrapper = styled.ul`
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    animation-duration: 0.3s;
    animation-name: ${props => props.isOpen ? showItems : hideItems}; 
    padding: 5rem;
    
    @media only screen and (max-width: 330px){
        padding: 5rem 2rem 5rem 2rem;
    }
`

const Item = styled.li`
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
    line-height:1.6rem;
    text-transform: capitalize;
    text-align: left;
    display: flex;
    align-items: center;
    column-gap: .5rem;

    :hover{
        color: #993255;
        text-decoration: underline;
    }
`

export default ({ isOpen, setIsOpen, isAuth, setIsDark }) => {

    const hideSidebar = (ev) => {
        setIsOpen(false)
        setIsDark(false)
    }

    return (
        <>
            <SidebarWrapper isOpen={isOpen}>
                <ListWrapper isOpen={isOpen}>
                    <NavLink to={'/'}>
                        <Item onClick={hideSidebar}>
                            <Icon.HouseFill size={'2rem'}/>
                            <span>Home</span>
                        </Item>
                    </NavLink>
                    <NavLink to={'/catalog'}>
                        <Item onClick={hideSidebar}>
                            <Icon.Cart size={'2rem'}/>
                            <span>Catalog</span>
                        </Item>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <Item onClick={hideSidebar}>
                            <Icon.EnvelopeFill size={'2rem'}/>
                            <span>Contact</span>
                        </Item>
                    </NavLink>
                    <NavLink to={'/blogs'}>
                        <Item onClick={hideSidebar}>
                            <Icon.Newspaper size={'2rem'}/>
                            <span>Blog</span>
                        </Item>
                    </NavLink>
                        {
                            isAuth ? <>
                                    <NavLink to={'/admin/users'}><Item onClick={hideSidebar}>Users</Item></NavLink>
                                </> : <></>
                        }
                </ListWrapper>
            </SidebarWrapper>
        </>
    )
}