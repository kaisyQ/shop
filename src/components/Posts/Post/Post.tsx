import React from "react";

import Button from "components/Custom/Button/Button";

import { NavLink } from "react-router-dom";

import useWindowWidth from "hooks/useWindowWidth";

import { 
    CardWrapper, CardImageWrapper, CardImage, CardInfoWrapper, CardInfoContainer, CardInfo, CardInfoItem,
    CardTitle, CardAbout
} from "./PostStyles";


import { API_URL } from "constants/constants";


interface IPostProps {
    id: string,
    title: string,
    imagesSrc: string[]
}



const Post: React.FC<IPostProps> = ({ id, title, imagesSrc }) => {
    
    const [isHovered, setIsHovered] = React.useState(false);

    const width = useWindowWidth();

    const onImageMouseOver = () => {
        setIsHovered(true);
    }

    const onImageMouseOut = () => {
        setIsHovered(false);
    }

    let image = imagesSrc.find(src => src.toLowerCase().includes("large".toLowerCase()));
    
    if (width <= 768) {
        image = imagesSrc.find(src => src.toLowerCase().includes("medium".toLowerCase()));
    }
    
    if (width <= 330) {
        image = imagesSrc.find(src => src.toLowerCase().includes("small".toLowerCase()));
    }
    console.log(imagesSrc);
    return (
        <>
            <CardWrapper>
                <CardImageWrapper 
                    onMouseOut={onImageMouseOut} 
                    onMouseOver={onImageMouseOver}
                >
                    <NavLink to={`/posts/${id}`}>
                        <CardImage 
                            isHovered={isHovered}
                            src={`${API_URL}${image}`}
                            alt="Card image" 
                        />
                    </NavLink>
                </CardImageWrapper>
                    <NavLink to={`/posts/${id}`}>
                        <CardInfoWrapper 
                            onMouseOut={onImageMouseOut} 
                            onMouseOver={onImageMouseOver} 
                            isHovered={isHovered}
                        >
                            <CardInfoContainer>
                                <CardInfo>
                                    <CardInfoItem>
                                        <CardTitle color={'#fff'} size={"2rem"}>{ title }</CardTitle>
                                    </CardInfoItem>
                                    <CardInfoItem>
                                        <Button isReverse={false}>Show More</Button>
                                    </CardInfoItem>
                                </CardInfo>
                            </CardInfoContainer>
                        </CardInfoWrapper>
                    </NavLink>

                    <CardAbout>
                        <CardInfoItem>
                            <CardTitle color={'#000'} size={"2rem"}>{ title }</CardTitle>
                        </CardInfoItem>
                        <CardInfoItem>
                            <NavLink to={`/posts/${id}`}>
                                <Button isReverse={true}>Show More</Button>
                            </NavLink>
                        </CardInfoItem>
                    </CardAbout>
                </CardWrapper>
        </>
    );
}

export default React.memo(Post);