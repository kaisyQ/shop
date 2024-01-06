import React from "react";

import styled from "styled-components";
import {Spinner} from "@nextui-org/react";


const PreloaderWrapper = styled.div`
    text-align: center;
`

const Preloader = () => {
    return (
        <>
            <PreloaderWrapper>
                <Spinner 
                    size="lg"
                    color="warning"
                    label="Loading..."
                />
            </PreloaderWrapper>
        </>
    );
}

export default Preloader;