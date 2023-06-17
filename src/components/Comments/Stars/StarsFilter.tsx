import React from "react";

import Star from "./Star/Star";

import { StarsWrapper } from "./StarsStyles";

import type { StarsConnectedProps } from "./StarsFilterContainer";

import type { RatingScore } from "types/types";

interface IStarsProps extends StarsConnectedProps {
}

const Stars: React.FC<IStarsProps> = ({ filterScore, setFilterScore }) => {
    
    return (
        <>
            <StarsWrapper>
                {
                    (() => {
                            const arr: React.JSX.Element[] = []
                            for(let i=1; i<=5;++i) {
                                arr.push(
                                    <>
                                        <Star 
                                            starCount={filterScore} 
                                            id={i} setStar={() => {
                                                if (i === filterScore) {
                                                    setFilterScore(0);
                                                    return;
                                                }
                                                setFilterScore(i as RatingScore);
                                            }}
                                        />
                                    </>
                                )
                            }
                            return arr
                    })()
                }
            </StarsWrapper>
        </>
    );
    
}

export default Stars;