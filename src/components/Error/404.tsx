import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Message = styled.h1`
    font-size: 7rem;
`;


const Component404 = () => {
    return (
        <>
            <Wrapper>
                <Message>Page not found...</Message>
            </Wrapper>
        </>
    );
}

export default Component404;