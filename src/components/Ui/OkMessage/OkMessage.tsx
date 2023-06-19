import React from "react";

import * as Icons from "react-bootstrap-icons";

import { OkMessageWrapper, OkMessageLogo, OkMessageText, BackHomeButton } from "./OkMessageStyles";

import { NavLink } from "react-router-dom";

interface IOkMessageProps {
    text: string
}

const OkMessage: React.FC<IOkMessageProps> = ({ text }) => {
    return (
        <>
            <OkMessageWrapper>
                <OkMessageText>{ text }</OkMessageText>
                <OkMessageLogo>
                    <Icons.CheckCircle size={"15rem"}/>
                </OkMessageLogo>
                <NavLink to={"/"}>
                    <BackHomeButton>
                        <Icons.ArrowLeft size={"2rem"} />
                        <span>Back to home</span>
                    </BackHomeButton>
                </NavLink>
            </OkMessageWrapper>
        </>
    );
}

export default OkMessage;