import React from "react"

import * as Icon from 'react-bootstrap-icons'

import { NavLink } from "react-router-dom"

import { 
    SidebarWrapper, ListWrapper, Item
} from "./SidebarStyles"

import { SidebarConnectedProps } from "./SidebarContainer"

import SellingIcon from "../Ui/Icons/SellingIcon";

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
                            <Icon.House size={'22px'}/>
                            <span>Home</span>
                        </Item>
                    </NavLink>
                    <NavLink to={'/catalog'}>
                        <Item onClick={hideSidebar}>
                            <Icon.Cart size={'22px'}/>
                            <span>Catalog</span>
                        </Item>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <Item onClick={hideSidebar}>
                            <Icon.Envelope size={'22px'}/>
                            <span>Contact</span>
                        </Item>
                    </NavLink>
                    <NavLink to={'/sell-your-sofa'}>
                        <Item onClick={hideSidebar}>
                            <SellingIcon width="22px" height="22px" />
                            <span>Sell your sofa</span>
                        </Item>
                    </NavLink>

                </ListWrapper>
            </SidebarWrapper>
        </>
    );
}

export default Sidebar;