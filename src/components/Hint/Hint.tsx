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



const Hint: React.FC<IHintProps> = ({ setIsHint, isHint }) => {
    
    const date = new Date();
    const seconds = date.getSeconds();
    const min = date.getMinutes();
    const hours = date.getHours();
  
    const [time, setTime] = React.useState(0);
    const [startTime, setStartTime] = React.useState(hours*60*60+min*60+seconds);
    const [timerInterval, setTimerInterval] = React.useState<number | null>(null);
    const [isRunningTimer, setIsRunningTimer] = React.useState(true);

    
    React.useEffect(() => {

        if (!isRunningTimer) {
          return () => {
            if (timerInterval) {
              clearInterval(timerInterval);
            }
          }
        }
    
        const updateTime = () => {
          const date = new Date();
          const seconds = date.getSeconds();
          const min = date.getMinutes();
          const hours = date.getHours();
          
          if (time === 120) {
            setIsHint(true);
            setIsRunningTimer(false);
            return;
          }
    
          setTime(() => {
              return hours*60*60+min*60+seconds-startTime;
          });
        }
        
        const timer = setInterval(updateTime, 1000);
    
        return () => {
          clearInterval(timer);
        }
      }, [time, isRunningTimer]);

    if (!isHint) {
        return null;
    }
    
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
                                    <Icon.Bell size={"7rem"} />
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