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
                !(id<=starCount) ? <Icon.Star size={"2.4rem"} /> : <Icon.StarFill size={"2.4rem"} />
            }
            </div>
        </>
    );
}

export default Star;