import React from "react";

import { 
    HintWrapper, HintCircle, HintBlock,
    HintHeader, HintHeaderExit, HintMessageWrapper,
    HintMessage, HintMessageText, HintMessageLink, HintMessageTitle, SunWrapper
} from "./HintStyles";

import { NavLink } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";

import { HintConnectedProps } from "./HintContainer";

interface IHintProps extends HintConnectedProps {}



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
                                <SunWrapper>
                                    <Icon.BrightnessHigh size={"7rem"} />
                                </SunWrapper>
                            </HintMessage>
                        </HintMessageWrapper>
                    </HintBlock>
                </HintCircle>
            </HintWrapper>
        </>
    );
}

export default Hint;