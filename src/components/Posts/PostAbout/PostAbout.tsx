import React from "react"

import { useParams } from "react-router-dom";

import { Wrapper, Image, Date, Title, Text, ImageWrapper } from "./PostAboutStyles";

import { PostAboutConnectedProps } from "./PostAboutContainer";

import { API_URL } from "constants/constants";


interface IPostAboutProps extends PostAboutConnectedProps {

}

const PostAbout: React.FC<IPostAboutProps> = ({ current, fetchPostById, setCurrent }) => {
    
    const { id } = useParams();

    React.useEffect(() => {
        if(!id) {
            return;
        }
        fetchPostById(id);

        return () => {
            setCurrent(null);
        }
    }, [id, fetchPostById, setCurrent])

    return (
        <>
            <Wrapper>
                { current ? <Title>{ current.title }</Title> : null }

                { current ? <Text>{ current.text }</Text> : null }

                { current ? <ImageWrapper>
                        <Image src={`${API_URL}${current.imagesSrc[0]}`} /> 
                    </ImageWrapper>
                : null }

                { current ? <Date>{ current.date.toLocaleDateString() }</Date> : null }
            </Wrapper>
        </>
    );
}

   
export default PostAbout;