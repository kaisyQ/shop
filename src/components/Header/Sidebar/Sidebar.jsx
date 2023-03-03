import React from "react"
import styled, { keyframes } from "styled-components"


import { NavLink } from "react-router-dom"


const openSidebar = keyframes`
    from { width: 0 }
    to { width: 70% }
`

const hideItems = keyframes`
    from {  opacity: 1 }
    to {  opacity: 0 }
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
    background-color: #eee2dc;
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
                    <Item onClick={hideSidebar}><NavLink to={'/'}>Home</NavLink></Item>
                    <Item onClick={hideSidebar}><NavLink to={'/catalog'}>Catalog</NavLink></Item>
                    <Item onClick={hideSidebar}><NavLink to={'/contact'}>Contact</NavLink></Item>
                    <Item onClick={hideSidebar}><NavLink to={'/blogs'}>Blog</NavLink></Item>
                    {
                        isAuth ? <>
                                <Item onClick={hideSidebar}><NavLink to={'/admin/users'}>Users</NavLink></Item>
                            </> : <></>
                    }
                </ListWrapper>
            </SidebarWrapper>
        </>
    )
}