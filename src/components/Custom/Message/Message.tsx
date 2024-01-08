import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
    
`;

const MessageTitle = styled.h1`
    font-size: 60px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 500px) {
        font-size: 30px;
    }

    @media screen and (max-width: 330px) {
        font-size: 28px;
    }
`;

interface IMessageProps {
    message: string
}

const Message:React.FC<IMessageProps> = ({ message }) => {
    return (
        <>
            <Wrapper>
                <MessageTitle>{ message }</MessageTitle>
            </Wrapper>
        </>
    );
}

export default Message;

