import React from "react";
import { DropDownItems, DropDownLi } from "./DropDownStyles";

import { NavLink } from "react-router-dom";

import type { DispatchTableSelectorType, IRoute } from "reducers/table-selector/reducer";

import { swapMainRoute } from "reducers/table-selector/reducer";

interface IDropDownContentProps {
    visibility: boolean,
    routes: Array<IRoute>,
    dispatch: DispatchTableSelectorType
}

export const DropDownContent : React.FC<IDropDownContentProps> = ({ visibility, routes, dispatch }) => {
    
    const onDropDownClick = (route: IRoute) => {
        dispatch(swapMainRoute(route));
    }

    return (
        <DropDownItems visible={ visibility ? 'visible' : 'hidden'}>
        {
            routes.map((route, index) => <DropDownLi key={index} marginRight={ visibility ? '2rem' : '0rem'} >
                    <NavLink to={route.path} onClick={(ev) => onDropDownClick(route)}>
                        {route.title}
                    </NavLink>
                </DropDownLi>   
            )    
        }
        </DropDownItems>
    );
}