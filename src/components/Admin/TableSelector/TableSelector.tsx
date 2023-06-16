import React from "react";

import { DropDownMenu, DropDownUl, DropDownTriggerLi } from "./SelectorStyles";

import { DropDownContent } from "./DropDown.tsx/DropDown";

import { NavLink } from "react-router-dom";

import reducer, { initialState, actions } from "reducers/table-selector/reducer";

import { ADMIN } from "types/types";

import type { Role } from "types/types";

interface ITableSelectorProps {
    role: Role | null
}


const TableSelector: React.FC<ITableSelectorProps> = ({ role }) => {
    
    const [isShown, showContent] = React.useState(false);

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        console.log(role);
        if (role === ADMIN) {
            dispatch(actions.setAdminRoutes());
            return;
        }
        dispatch(actions.setEmployeeRoutes());
    }, [role])

    const onUlMouseLeave = (ev: React.MouseEvent<HTMLUListElement>) => {
        showContent(false);
    }

    const onUlTouchEnd = (ev: React.TouchEvent<HTMLUListElement>) => {
        showContent(!isShown);
    }

    const onUlMouseOver = (ev: React.MouseEvent<HTMLLIElement>) => {
        showContent(true);
    }
    
    return (
        <DropDownMenu>
            <DropDownUl onMouseLeave={onUlMouseLeave} onTouchEnd={onUlTouchEnd}>
                <DropDownTriggerLi onMouseOver={onUlMouseOver}>
                    <NavLink to={state.mainRoute.path}>{state.mainRoute.title}</NavLink>
                </DropDownTriggerLi>

                <DropDownContent 
                    routes={state.routes}
                    visibility={ isShown }
                    dispatch={dispatch}
                />
            </DropDownUl>
        </DropDownMenu>
    );
}

export default TableSelector