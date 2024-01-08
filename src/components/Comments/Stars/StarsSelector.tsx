import React from "react";

import Star from "./Star/Star";

import { StarsWrapper } from "./StarsStyles";

import type { RatingScore } from "types/types";


interface IStarsProps {
    onChange: (count: RatingScore) => void,
    count: RatingScore
}

const StarsSelector: React.FC<IStarsProps> = ({ onChange, count }) => {

    return (
        <>
            <StarsWrapper>
                {
                    (() => {
                            const stars: React.JSX.Element[] = []
                            for(let i = 1; i <= 5; ++i) {
                                stars.push(
                                        <Star 
                                            key={i}
                                            starCount={count} 
                                            id={i} setStar={() => {
                                                onChange(i as RatingScore);
                                            }}
                                        />
                                )
                            }
                            return stars;
                    })()
                }
            </StarsWrapper>
        </>
    );
    
}

export default StarsSelector;