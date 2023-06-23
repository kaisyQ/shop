import React from "react";

import * as Icons from "react-bootstrap-icons";

import { OkMessageWrapper, OkMessageLogo, OkMessageText, BackHomeButton } from "./OkMessageStyles";

import { NavLink } from "react-router-dom";

interface IOkMessageProps {
    status: number
}

const OkMessage: React.FC<IOkMessageProps> = ({ status }) => {
    return (
        <>
            <OkMessageWrapper>
                <OkMessageText>
                {
                    status === 202 ? "Your request has been sent !"
                        :"Bad response..."
                }
                </OkMessageText>
                <OkMessageLogo>
                {
                    status === 202 ? <>
                        <Icons.CheckCircle size={"15rem"} />
                    </> : <>
                        <Icons.ExclamationCircle size={"15rem"} />
                    </>
                }
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