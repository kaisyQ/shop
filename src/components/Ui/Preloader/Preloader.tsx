import React from "react";

import styled from "styled-components";

import preloaderSVG from "./../../../images/preloader.svg";

const PreloaderWrapper = styled.div`
    text-align: center;
`

const Preloader = () => {
    return (
        <>
            <PreloaderWrapper>
                <img src={preloaderSVG} alt="preloader" />
            </PreloaderWrapper>
        </>
    );
}

export default Preloader;