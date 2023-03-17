import React from "react"
import styled from 'styled-components'
import logo from  './../../images/logo.svg'

import { NavLink } from "react-router-dom"

import * as Icon from 'react-bootstrap-icons'




const HeaderWrapper = styled.header`
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 5;
`

const Logo = styled.img`
    display: block;
    width: 6rem;
`
const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    column-gap: 1rem;
`


const MenuWrapper = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 40%;
    right: calc(100% + 1rem);
    transform: translateY(-50%);
    cursor: pointer;
`

const Menu = styled.div`
    position: relative;
    width: 2rem;
    top: 50%;
    height: 0rem;
    background-color: inherit;
    transform: translateY(-50%);
`
const MenuLine = styled.div`
    position: absolute;
    left: 0;
    top: 40%;
    height: 0.1rem;
    width: 2rem;
    background-color: ${props => !props.isOpen ? 'black' : 'inherit'};
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
        background-color: black;
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
        background-color: black;
        transform: rotate(${props => !props.isOpen ? '0' : '-45deg'});
        transition: all .4s;
    }
`


export default ({ 
    signOut, isAuth, setIsDark, isDark, 
    setIsOpenSidebar, isOpenSidebar, isSearchOpen, setIsSearchOpen }) => {

    React.useEffect(() => {
        if(!isDark) {
            setIsOpenSidebar(false)
            setIsSearchOpen(false)
        }
    }, [isDark])

    const onMenuClick = (ev) => {
        setIsOpenSidebar((prev) => !prev)
        setIsDark(!isDark)
    }

    const onSignOutClick = (ev) => {
        signOut()
    }

    const onSearchClick = (ev) => {
        setIsSearchOpen(true)
        setIsDark(!isDark)
    }

    return (
        <>
            <HeaderWrapper>
                <Icon.Search cursor={'pointer'} display={'block'} size={'2rem'} onClick={onSearchClick} />
                <NavLink to={'/'}>
                    <Logo src={logo} alt="logo" />
                </NavLink>
                <LinksContainer>
                    <MenuWrapper onClick={onMenuClick}>
                        <Menu>
                            <MenuLine isOpen={isOpenSidebar} />
                        </Menu>
                    </MenuWrapper>
                    <NavLink to={'/cart'} >
                        <Icon.Bag size={'2rem'}/>
                    </NavLink>
                    {
                        isAuth ? <>
                            <NavLink to={'/'}>
                                <Icon.BoxArrowRight size={'2.5rem'} onClick={onSignOutClick}/>
                            </NavLink>
                        </> : <></>
                    }
                </LinksContainer>
            </HeaderWrapper>
        </>
    )    
}