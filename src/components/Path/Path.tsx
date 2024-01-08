import React from "react";

import { PathWrapper } from "./PathStyles";

import { NavLink } from "react-router-dom";

interface IPathProps {
    mainPath: {
        name: string,
        url: string
    },
    subPath: {
        name: string,
        url: string
    }
}


const Path: React.FC<IPathProps> = ({ mainPath, subPath }) => {
    return (
        <>
            <PathWrapper>
                <span>/</span>
                <NavLink to={mainPath.url}>{mainPath.name}</NavLink>
                <span>/</span>
                <NavLink to={subPath.url}>{subPath.name}</NavLink>
                <span>/</span>
            </PathWrapper>
        </>
    );
}

export default Path;