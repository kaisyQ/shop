import React from "react"
import styled from 'styled-components'
import logo from  './../../images/logo.svg'

import Sidebar from "./Sidebar/Sidebar"
import Search from "./Search/Search"

import { NavLink } from "react-router-dom"

import * as Icon from 'react-bootstrap-icons'


const HeaderWrapper = styled.header`
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const Logo = styled.img`
    display: block;
    width: 6rem;
`
const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

const MenuWrapper = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 50%;
    right: calc(100% + 1rem);
    transform: translateY(-50%);
`

const Menu = styled.div`
    position: relative;
    width: 2rem;
    height: 2rem;
    background-color: inherit;
`
const MenuLine = styled.div`
    position: absolute;
    left: 0;
    top: 40%;
    height: 0.1rem;
    width: 2rem;
    background-color: ${props => !props.isOpen ? '#123C69' : 'inherit'};
    transform: translateY(-50%);
    transition: all .4s;

    ::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: ${props => !props.isOpen ? '0.6rem' : '0'};
        height: 0.1rem;
        width: 2rem;
        background-color: #123C69;
        transform: rotate(${props => !props.isOpen ? '0' : '45deg'});
        transition: all .4s;
    }

    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: ${props => !props.isOpen ? '-0.6rem' : '0'};
        height: 0.1rem;
        width: 2rem;
        background-color: #123C69;
        transform: rotate(${props => !props.isOpen ? '0' : '-45deg'});
        transition: all .4s;
    }
`

export default () => {

    const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)

    const onMenu = (ev) => {
        setIsOpenSidebar((prev) => !prev)
    }

    return (
        <>
            <HeaderWrapper>
                <Sidebar setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} />
                <Search />
                <NavLink to={'#'}>
                    <Icon.Search size={'2rem'}/>
                </NavLink>
                <NavLink to={'#'}>
                    <Logo src={logo} alt="logo" />
                </NavLink>
                <LinksContainer>
                    <MenuWrapper>
                        <Menu onClick={onMenu}>
                            <MenuLine isOpen={isOpenSidebar} />
                        </Menu>
                    </MenuWrapper>
                    <NavLink to={'#'}>
                        <Icon.Bag size={'2rem'}/>
                    </NavLink>
                </LinksContainer>
            </HeaderWrapper>
        </>
    )    
}