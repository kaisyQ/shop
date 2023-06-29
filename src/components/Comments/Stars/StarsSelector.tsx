import React from "react";

import Star from "./Star/Star";

import { StarsWrapper } from "./StarsStyles";

import type { ActionType } from "reducers/add-comment-modal/reducer";

import type { RatingScore } from "types/types";

import { actions } from "reducers/add-comment-modal/reducer";

interface IStarsProps {
    dispatch?: React.Dispatch<ActionType>,
    starCount: RatingScore
}

const StarsSelector: React.FC<IStarsProps> = ({ dispatch, starCount }) => {

    return (
        <>
            <StarsWrapper>
                {
                    (() => {
                            const arr: React.JSX.Element[] = []
                            for(let i=1; i<=5; ++i) {
                                arr.push(
                                        <Star 
                                            key={i}
                                            starCount={starCount} 
                                            id={i} setStar={() => {
                                                if (dispatch) {
                                                    dispatch(actions.setRating(i as RatingScore));
                                                }   
                                            }}
                                        />
                            )
                            }
                            return arr
                    })()
                }
            </StarsWrapper>
        </>
    );
    
}

export default StarsSelector;