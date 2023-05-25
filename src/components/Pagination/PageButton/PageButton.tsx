import React from "react";

import { NavLink } from "react-router-dom";

import { Wrapper } from "./PageButtonStyles";

interface IPageButtonProps {
    number: number,
    isCurrent: boolean
}

const PageButton: React.FC<IPageButtonProps> = ({ number, isCurrent }) => {
    return (
        <>
            <NavLink to={`/blogs/${number}`}>
                <Wrapper isCurrent={isCurrent}>{ number }</Wrapper>
            </NavLink>
        </>
    );
}

export default PageButton;