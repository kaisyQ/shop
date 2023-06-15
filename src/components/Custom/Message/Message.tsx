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

