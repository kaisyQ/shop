import React from "react";

import Button from "components/Custom/Button/Button";

import { NavLink } from "react-router-dom";

import { 
    CardWrapper, CardImageWrapper, CardImage, CardInfoWrapper, CardInfoContainer, CardInfo, CardInfoItem,
    CardTitle, CardAbout
} from "./PostStyles";


interface IBlogItemProps {
    id: number,
    title: string,
    imageSrc: string
}


const BlogItem: React.FC<IBlogItemProps> = ({ id, title, imageSrc }) => {

    return (
        <>
           <CardWrapper> 
                    <CardImageWrapper>
                        <CardImage 
                            src={imageSrc}
                            alt="Card image" 
                        />
                    </CardImageWrapper>
                    
                    <CardInfoWrapper>
                        <CardInfoContainer>
                            <CardInfo>
                                <CardInfoItem>
                                    <CardTitle size={"2rem"}>{ title }</CardTitle>
                                </CardInfoItem>
                                <CardInfoItem>
                                    <NavLink to={`/posts/${id}`}>
                                        <Button isReverse={true}>Show More</Button>
                                    </NavLink>
                                </CardInfoItem>
                            </CardInfo>
                        </CardInfoContainer>
                    </CardInfoWrapper>

                    <CardAbout>
                        <CardInfoItem>
                            <CardTitle size={"2rem"}>{ title }</CardTitle>
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

export default BlogItem;