import React from "react";
import { DropDownMenu, DropDownUl, DropDownTriggerLi } from "./Selector";
import { Routes } from "./TableNavigationConfig"
import { DropDownContent } from "./SelectorDropDown.tsx/SelectorDropDownContent";


const TableSelector = () => {
    const [isShown, showContent] = React.useState(false)

    return (
        <DropDownMenu>
            <DropDownUl onMouseLeave={() => showContent(false)} onTouchEnd={() => showContent(!isShown)}>
                <DropDownTriggerLi onMouseOver={() => showContent(true)}>
                    { Routes[0] }
                </DropDownTriggerLi>

                <DropDownContent visibility={ isShown } setVisibility={ showContent } />
            </DropDownUl>
        </DropDownMenu>
    )
}

export default TableSelector