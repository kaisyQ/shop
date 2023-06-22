import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";
import { HintConnectedProps } from "./HintContainer";

interface IHintProps extends HintConnectedProps {}

const HintWrapper = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
`;

const HintCircle = styled.div`
    position: relative;
    width: 8rem;
    height: 8rem;
    background-color: #000;
    border-radius: 50%;

    ::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: #fff;
    }
`;

const HintBlock = styled.div`
    position: absolute;
    bottom: 50%;
    right: 50%;

    background-color: #000;
    border: .1rem solid #000;
    box-shadow: -2px 7px 62px 13px rgba(0, 0, 0, 0.2);
    color: #fff;
    width: 26rem;
    height: 35rem;

    padding: 2rem 2rem;
`;


const HintHeader = styled.header`
    text-align: right;
`;

const HintHeaderExit = styled.button`
    color: inherit;
`;

const HintMessageWrapper = styled.main`
`;

const HintMessage = styled.section`
    
`;

const HintMessageText = styled.p`
    font-size: 2rem;
    margin: 3rem 0;
    text-align: left;
`;

const HintMessageTitle = styled.h3`
    font-size: 2.4rem;
`;

const HintMessageLink = styled.span`
    text-decoration: underline;
    font-style: italic;
`;

const Hint: React.FC<IHintProps> = ({ setIsHint }) => {
    
    React.useEffect(() => {

    }, [])
    
    return (
        <>
            <HintWrapper>
                <HintCircle>
                    <HintBlock>
                        <HintHeader>
                            <HintHeaderExit onClick={(ev) => setIsHint(false)}>
                                <Icon.XLg size={"2rem"}/>
                            </HintHeaderExit>
                        </HintHeader>
                        <HintMessageWrapper>
                            <HintMessage>
                                <HintMessageTitle>Message *</HintMessageTitle>
                                <HintMessageText>
                                    <span>If you have any questions, you can ask them </span>
                                    <HintMessageLink>
                                        <NavLink to={"/contact"}>here</NavLink>
                                    </HintMessageLink>
                                </HintMessageText>
                                <Icon.BrightnessHigh size={"7rem"}/>
                            </HintMessage>
                        </HintMessageWrapper>
                    </HintBlock>
                </HintCircle>
            </HintWrapper>
        </>
    );
}

export default Hint;