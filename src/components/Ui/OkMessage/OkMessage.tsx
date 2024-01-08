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
                    status === 200 ? "Your request has been sent !"
                        : "Bad response..."
                }
                </OkMessageText>
                <OkMessageLogo>
                {
                    status === 200 ? <>
                        <Icons.CheckCircle size={"150px"} />
                    </> : <>
                        <Icons.ExclamationCircle size={"150px"} />
                    </>
                }
                </OkMessageLogo>
                <NavLink to={"/"}>
                    <BackHomeButton>
                        <Icons.ArrowLeft size={"20px"} />
                        <span>Back to home</span>
                    </BackHomeButton>
                </NavLink>
            </OkMessageWrapper>
        </>
    );
}

export default OkMessage;