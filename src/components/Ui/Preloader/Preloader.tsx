import React from "react";

import styled from "styled-components";

const PreloaderWrapper = styled.div`
    text-align: center;
`

const Preloader = () => {
    return (
        <>
            <PreloaderWrapper>
                <h2>Loading...</h2>
            </PreloaderWrapper>
        </>
    );
}

export default Preloader;