import React from "react"

import { useParams, NavLink } from "react-router-dom";

import { 
    Wrapper, Image, Date, BtnsWrapper, Title, Text, Btn
} from "./PostAboutStyles";


import { PostAboutConnectedProps } from "./PostAboutContainer";


interface IPostAboutProps extends PostAboutConnectedProps {

}

const PostAbout: React.FC<IPostAboutProps> = ({ current, setCurrentPost }) => {
    const { id } = useParams();

    React.useEffect(() => {
        if(!id) {
            return;
        }
        setCurrentPost(parseInt(id));
    }, [id])
    return (
        <>
            <Wrapper>
                { current ? <Title>{ current.title }</Title> : null }

                { current ? <Text>{ current.text }</Text> : null }

                { current ? <Image src={current.imageSrc[0]}/> : null }

                { current ? <Date>{ current.date }</Date> : null }
            </Wrapper>
        </>
    );
}

   
export default PostAbout;