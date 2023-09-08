import React from "react";

import logo from  './../../images/bigLogo.jpg';

import { NavLink } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';

import { 
    HeaderWrapper, Logo, Menu, MenuLine, LinksWrapper
} from "./HeaderStyles";

import type { HeaderConnectedProps } from "./HeaderContainer";

import useWindowWidth from "hooks/useWindowWidth";

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

    const windowWidth = useWindowWidth();

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
                <LinksWrapper>

                    <div>
                        <NavLink to={'/cart'}>
                            <Icon.Bag size={'2rem'} />
                        </NavLink>                        
                    </div>
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