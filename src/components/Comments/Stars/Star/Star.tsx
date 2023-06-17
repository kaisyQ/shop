import React from "react";

import * as Icon from "react-bootstrap-icons";

import type { ActionType } from "reducers/add-comment-modal/reducer";

import { actions } from "reducers/add-comment-modal/reducer";
import { RatingScore } from "types/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface IStarProps {
    id: number, 
    setStar: () => void
    starCount: number,
}

const Star: React.FC<IStarProps> = ({ id, setStar, starCount }) => {
    
    const onStarClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        setStar();
    }

    return (
        <>
            <div onClick={onStarClick}>
            {
                !(id<=starCount) ? <Icon.Star size={"3rem"} /> : <Icon.StarFill size={"3rem"} />
            }
            </div>
        </>
    );
}

export default Star;