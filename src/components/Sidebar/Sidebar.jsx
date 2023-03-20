import React from "react"
import styled, { keyframes } from "styled-components"

import { NavLink } from "react-router-dom"

const openSidebar = keyframes`
    from { width: 0 }
    to { width: 70% }
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
    width: ${props => props.isOpen ? '70%' : '0'};
    background-color: white;
    animation-duration: 0.3s;
    animation-name: ${openSidebar};
    z-index: 10;
`


const ListWrapper = styled.ul`
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    animation-duration: 0.3s;
    animation-name: ${props => props.isOpen ? showItems : hideItems}; 
    padding: 5rem;
`

const Item = styled.li`
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
    text-transform: capitalize;
    text-align: left;

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
                <NavLink to={'/'}><Item onClick={hideSidebar}>Home</Item></NavLink>
                <NavLink to={'/catalog'}><Item onClick={hideSidebar}>Catalog</Item></NavLink>
                <NavLink to={'/contact'}><Item onClick={hideSidebar}>Contact</Item></NavLink>
                <NavLink to={'/blogs'}><Item onClick={hideSidebar}>Blog</Item></NavLink>
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