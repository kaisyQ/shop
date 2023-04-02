import React from "react"
import styled, { keyframes } from 'styled-components'
import logo from  './../../images/logo.svg'

import Button from "../Custom/Button"

import UserMenu from "./UserMenu/UserMenu"

import { NavLink } from "react-router-dom"

import * as Icon from 'react-bootstrap-icons'


const HeaderWrapper = styled.header`
    padding: 2.5rem 2.5rem 4rem 2.5rem;
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
    display: none;
    width: 2rem;
    height: 100%;
    top: 50%;
    right: calc(100% + 1rem);
    transform: translateY(-50%);
    cursor: pointer;


    @media only screen and (max-width: 768px){
        display: block;
    }
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
const LinkWrapper = styled.div`
    height: 100%;
    line-height: 100%;
    position: relative;
`

const Counter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.4rem;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    background: #000;
    color: #fff;
    border-radius: 50%;
    z-index: 12;
`

export default ({ 
    signOut, isAuth, setIsDark, isDark, 
    setIsOpenSidebar, isOpenSidebar, cartItemCount }) => {

    const [userIconClicked, setUserIconClicked] = React.useState(false)

    React.useEffect(() => {
        if(!isDark) {
            setIsOpenSidebar(false)
        }
    }, [isDark])

    const onMenuClick = (ev) => {
        setIsOpenSidebar((prev) => !prev)
        setIsDark(!isDark)
        setUserIconClicked(false)
    }

    const onSignOutClick = (ev) => {
        signOut()
    }

    const onUserIconClick = (ev) => {
        setUserIconClicked(prev => !prev)
    }

    return (
        <>
            <HeaderWrapper>
                <NavLink to={'/search'}>
                    <Icon.Search cursor={'pointer'} display={'block'} size={'2rem'} />
                </NavLink>
                <NavLink to={'/'}>
                    <Logo src={logo} alt="logo" />
                </NavLink>
                <LinksContainer>
                    <MenuWrapper onClick={onMenuClick}>
                        <Menu>
                            <MenuLine isOpen={isOpenSidebar} />
                        </Menu>
                    </MenuWrapper>
                    <LinkWrapper counter={true}>
                        <Icon.Person size={'2.2rem'} cursor={'pointer'} onClick={onUserIconClick} />
                        <UserMenu clicked={userIconClicked} setClicked={setUserIconClicked}/>
                    </LinkWrapper>
                    <NavLink to={'/cart'}>
                        <LinkWrapper counter={true}>
                            <Icon.Bag size={'2rem'} />
                            {
                                cartItemCount?<Counter>{cartItemCount}</Counter>:<></>
                            }
                        </LinkWrapper>
                    </NavLink>
                    {
                        isAuth ? <>
                            <NavLink to={'/'}>
                                <LinkWrapper>
                                    <Icon.BoxArrowRight size={'2.2rem'} onClick={onSignOutClick}/>
                                </LinkWrapper>
                            </NavLink>
                        </> : <></>
                    }
                </LinksContainer>
            </HeaderWrapper>
        </>
    )    
}