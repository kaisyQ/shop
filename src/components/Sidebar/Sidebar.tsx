import React from "react"

import * as Icon from 'react-bootstrap-icons'

import { NavLink } from "react-router-dom"

import { 
    SidebarWrapper, ListWrapper, Item
} from "./SidebarStyles"

import { SidebarConnectedProps } from "./SidebarContainer"

import SellingIcon from "./../Custom/Icons/SellingIcon";

interface ISidebarProps extends SidebarConnectedProps{
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean
}


const Sidebar: React.FC<ISidebarProps> = ({ isOpen, setIsOpen, setIsDark }) => {

    const hideSidebar = (ev: React.MouseEvent<HTMLLIElement>) => {
        setIsOpen(false);
        setIsDark(false);
    }

    return (
        <>
            <SidebarWrapper isOpen={isOpen}>
                <ListWrapper>
                    <NavLink to={'/'}>
                        <Item onClick={hideSidebar}>
                            <Icon.House size={'2rem'}/>
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
                            <Icon.Envelope size={'2rem'}/>
                            <span>Contact</span>
                        </Item>
                    </NavLink>
                    <NavLink to={'/posts'}>
                        <Item onClick={hideSidebar}>
                            <Icon.Newspaper size={'2rem'}/>
                            <span>Posts</span>
                        </Item>
                    </NavLink>

                    <NavLink to={'/posts'}>
                        <Item onClick={hideSidebar}>
                            <SellingIcon width="2rem" height="2rem" />
                            <span>Sell</span>
                        </Item>
                    </NavLink>

                </ListWrapper>
            </SidebarWrapper>
        </>
    );
}

export default Sidebar;