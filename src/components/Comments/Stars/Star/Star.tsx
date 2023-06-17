import React from "react";

import * as Icon from "react-bootstrap-icons";

interface IStarProps {
    id: number, 
    setStar: React.Dispatch<React.SetStateAction<number>>,
    starCount: number,
    withReseat?: boolean
}

const Star: React.FC<IStarProps> = ({ id, setStar, starCount, withReseat }) => {
    
    const onStarClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        if (!withReseat) {
            setStar(id);
            return;
        }
        if (id === starCount) {
            setStar(0);
            return;
        }
        setStar(id);
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