import React from "react";

import logo from  './../../images/logo1.jpg';

import { NavLink } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';
import Button from "components/Custom/Button/Button";


import { 
    HeaderWrapper, Logo, LinksContainer, MenuWrapper, Menu, MenuLine
} from "./HeaderStyles";

import type { HeaderConnectedProps } from "./HeaderContainer";


interface IHeaderProps extends HeaderConnectedProps {
    setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>,
    isOpenSidebar: boolean
}


const Header: React.FC<IHeaderProps> = ({ setIsDark, isDark, setIsOpenSidebar, isOpenSidebar }) => {

    React.useEffect(() => {
        if(!isDark) {
            setIsOpenSidebar(false);
        }
    }, [isDark]);

    const onMenuClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        setIsOpenSidebar((prev) => !prev);
        setIsDark(!isDark);
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
                </LinksContainer>
            </HeaderWrapper>
        </>
    );  
}

export default Header;