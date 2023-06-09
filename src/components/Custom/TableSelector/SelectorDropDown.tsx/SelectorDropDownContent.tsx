import React from "react";
import { DropDownItems, DropDownLi } from "./DropDownContent";
import { Routes, changeTriggerLi } from "../TableNavigationConfig";


interface IDropDownContentProps {
    visibility: boolean,
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

export const DropDownContent : React.FC<IDropDownContentProps> = ( {visibility} ) => {

    return (
        <DropDownItems visible={ visibility ? 'visible' : 'hidden'}>
            <DropDownLi marginRight={ visibility ? '2rem' : '0rem'} onClick={() => changeTriggerLi(1)}>
                { Routes[1] }
            </DropDownLi>

            <DropDownLi marginRight={ visibility ? '2rem' : '0rem'} onClick={() => changeTriggerLi(2)}>
                { Routes[2] }
            </DropDownLi>
    </DropDownItems>
    )

}