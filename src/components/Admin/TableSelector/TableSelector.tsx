import React from "react";
import { DropDownMenu, DropDownUl, DropDownTriggerLi } from "./SelectorStyles";
import { DropDownContent } from "./DropDown.tsx/DropDown";
import { NavLink } from "react-router-dom";
import reducer, { initialState } from "reducers/table-selector.reducer";


const TableSelector = () => {
    const [isShown, showContent] = React.useState(false);

    const onUlMouseLeave = (ev: React.MouseEvent<HTMLUListElement>) => {
        showContent(false);
    }

    const onUlTouchEnd = (ev: React.TouchEvent<HTMLUListElement>) => {
        showContent(!isShown);
    }

    const onUlMouseOver = (ev: React.MouseEvent<HTMLLIElement>) => {
        showContent(true);
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);
    
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