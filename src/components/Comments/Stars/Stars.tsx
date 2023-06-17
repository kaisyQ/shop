import React from "react";

import Star from "./Star/Star";

import { StarsWrapper } from "./StarsStyles";

const Stars = () => {

    const [starCount, setStarCount] = React.useState(0);
    
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
                                            withReseat={true} 
                                            starCount={starCount} 
                                            id={i} setStar={setStarCount}
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