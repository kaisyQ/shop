import React from "react";

import * as Icon from "react-bootstrap-icons";

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
                !(id<=starCount) ? <Icon.Star 
                    
                        cursor={'pointer'} size={"24px"} 
                    
                    /> : 
                    
                    <Icon.StarFill cursor={'pointer'} size={"24px"} />
            }
            </div>
        </>
    );
}

export default React.memo(Star);