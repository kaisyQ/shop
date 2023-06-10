import React from "react"

import { useParams } from "react-router-dom";

import { Wrapper, Image, Date, Title, Text } from "./PostAboutStyles";

import { PostAboutConnectedProps } from "./PostAboutContainer";


interface IPostAboutProps extends PostAboutConnectedProps {

}

const PostAbout: React.FC<IPostAboutProps> = ({ current, fetchPostById }) => {
    
    const { id } = useParams();

    React.useEffect(() => {
        if(!id) {
            return;
        }
        fetchPostById(id);
    }, [id, fetchPostById])

    return (
        <>
            <Wrapper>
                { current ? <Title>{ current.title }</Title> : null }

                { current ? <Text>{ current.text }</Text> : null }

                { current ? <Image src={current.imageSrc}/> : null }

                { current ? <Date>{ current.date.toISOString() }</Date> : null }
            </Wrapper>
        </>
    );
}

   
export default PostAbout;