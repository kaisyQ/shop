import React from "react";

import Button from "components/Custom/Button/Button";

import { NavLink } from "react-router-dom";

import useWindowWidth from "hooks/useWindowWidth";

import { 
    CardWrapper, CardImageWrapper, CardImage, CardInfoWrapper, CardInfoContainer, CardInfo, CardInfoItem,
    CardTitle, CardAbout
} from "./PostStyles";


interface IBlogItemProps {
    id: string,
    title: string,
    imagesSrc: {id: string, src: string}[]
}


const BlogItem: React.FC<IBlogItemProps> = ({ id, title, imagesSrc }) => {

    const [isHovered, setIsHovered] = React.useState(false);

    const width = useWindowWidth();

    const onImageMouseOver = () => {
        setIsHovered(true);
    }

    const onImageMouseOut = () => {
        setIsHovered(false);
    }

    const smallSrc = imagesSrc.find(imageSrc => imageSrc.src.toLowerCase().includes("small".toLowerCase()));
    const mediumSrc = imagesSrc.find(imageSrc => imageSrc.src.toLowerCase().includes("large".toLowerCase()));
    const largeSrc = imagesSrc.find(imageSrc => imageSrc.src.toLowerCase().includes("medium".toLowerCase()));

    let resSrc : string | undefined = largeSrc?.src;
    
    if (width <= 768) resSrc = mediumSrc?.src;
    if (width <= 330) resSrc = smallSrc?.src;


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
                            src={resSrc}
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