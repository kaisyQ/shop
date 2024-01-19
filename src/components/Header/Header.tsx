import React from "react";

import logo from  './../../images/bigLogo.jpg';

import { NavLink } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';
import { 
    HeaderWrapper, Logo, Menu, MenuLine, LinksWrapper, CartBagWrapper
} from "./HeaderStyles";

import type { HeaderConnectedProps } from "./HeaderContainer";

import useWindowWidth from "hooks/useWindowWidth";

interface IHeaderProps extends HeaderConnectedProps {
    setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>,
    isOpenSidebar: boolean
}


const Header: React.FC<IHeaderProps> = ({ cartItemCount, setIsDark, isDark, setIsOpenSidebar, isOpenSidebar }) => {
    React.useEffect(() => {
        if(!isDark) {
            setIsOpenSidebar(false);
        }
    }, [setIsOpenSidebar, isDark]);

    const windowWidth = useWindowWidth();

    const onMenuClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        setIsOpenSidebar((prev) => !prev);
        setIsDark(!isDark);
    }

    return (
        <>
            <HeaderWrapper>
                <NavLink to={'/search'}>
                    <Icon.Search cursor={'pointer'} display={'block'} size={'20px'} />
                </NavLink>
                <NavLink to={'/'}>
                    <Logo src={logo} alt="logo" />
                </NavLink>
                <LinksWrapper>

                    <CartBagWrapper count={cartItemCount}>
                    
                        <NavLink to={'/cart'}>
                    
                            <Icon.Bag size={'20px'} />
                    
                        </NavLink>                        
                    
                    </CartBagWrapper>
                    {
                        windowWidth <= 768 ? <>
        
                            <Menu onClick={onMenuClick}>
        
                                <MenuLine isOpen={isOpenSidebar} />
        
                            </Menu> 

                        </> : null
                    }
                </LinksWrapper>
            </HeaderWrapper>
        </>
    );  
}

export default Header;