import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const MessageTitle = styled.h1`
    font-size: 7rem;

    @media screen and (max-width: 768px) {
        font-size: 5rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 3.4rem;
    }

    @media screen and (max-width: 330px) {
        font-size: 2.8rem;
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

