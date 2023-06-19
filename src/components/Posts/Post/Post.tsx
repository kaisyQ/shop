import React from "react";

import Button from "components/Custom/Button/Button";

import { NavLink } from "react-router-dom";

import { 
    CardWrapper, CardImageWrapper, CardImage, CardInfoWrapper, CardInfoContainer, CardInfo, CardInfoItem,
    CardTitle, CardAbout
} from "./PostStyles";


interface IBlogItemProps {
    id: string,
    title: string,
    imageSrc: string
}


const BlogItem: React.FC<IBlogItemProps> = ({ id, title, imageSrc }) => {

    const [isHovered, setIsHovered] = React.useState(false);

    const onImageMouseOver = () => {
        setIsHovered(true);
    }

    const onImageMouseOut = () => {
        setIsHovered(false);
    }

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
                            src={imageSrc}
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

export default React.memo(BlogItem);