import React from "react";

import { NavLink } from "react-router-dom";

import { Wrapper, Item } from "./NavbarStyles";

const Navbar: React.FC = () => {
    return (
        <>
            <Wrapper>
                <NavLink to={'/'}><Item>Home</Item></NavLink>
                <NavLink to={'/catalog'}><Item>Catalog</Item></NavLink>
                <NavLink to={'/contact'}><Item>Contact</Item></NavLink>
                <NavLink to={'/posts'}><Item>Posts</Item></NavLink>
            </Wrapper>
        </>
    );
}

export default Navbar;