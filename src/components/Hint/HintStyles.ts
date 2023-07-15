import styled, { keyframes } from "styled-components";

const show = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
        visibility: hidden;
    }
    to {
        transform: scale(1);
        opacity: 1;
        visibility: visible;
    }
`

const textBlink = keyframes`
    from {
        transform: scale(1.2);
    }
    to {
        transform: scale(1);
    }
`

export const HintWrapper = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 99999;
`;

export const HintCircle = styled.div`
    position: relative;
    width: 8rem;
    height: 8rem;
    background-color: #000;
    border: .2rem solid #fff;
    border-radius: 50%;

    animation: ${show} 2s ease-in-out forwards;

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

export const HintBlock = styled.div`
    position: absolute;
    bottom: 50%;
    right: 50%;

    background-color: #000;
    border: .1rem solid #fff;
    box-shadow: -2px 7px 62px 13px rgba(0, 0, 0, 0.2);
    color: #fff;
    width: 26rem;
    height: 35rem;

    padding: 2rem 2rem;

`;


export const HintHeader = styled.header`
    text-align: right;
`;

export const HintHeaderExit = styled.button`
    color: inherit;
`;

export const HintMessageWrapper = styled.main`
`;

export const HintMessage = styled.section`
`;

export const HintMessageText = styled.p`
    font-size: 2rem;
    margin: 3rem 0;
    text-align: left;
`;

export const HintMessageTitle = styled.h3`
    font-size: 2.4rem;
    animation: ${textBlink} 1s ease-in-out forwards;
    animation-iteration-count: infinite;
`;

export const HintMessageLink = styled.span`
    text-decoration: underline;
    font-style: italic;
`;

export const SunWrapper = styled.div`
`;