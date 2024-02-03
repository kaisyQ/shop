import styled, { keyframes } from "styled-components";

interface IShowProps {
    visible: boolean
}

const Hide = keyframes`
    0% {
        opacity: 1;
        transform: translateY(-0);
        max-height: 1000px;
    }
    100% {
        opacity: 0;
        transform: translateY(-100%);
        max-height: 0;
    }
`;

const Show = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
        max-height: 0;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        max-height: 1000px;
    }
`;


export const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    white-space: pre-line;
`;

export const InfoWrapper = styled.div`
    overflow: hidden;
    
`;

export const Text = styled.p<IShowProps>`
    font-size: 16px;
    text-indent: 25px;    
    text-align: justify;
    transform: translateY(-100%);
    animation: ${props => props.visible ? Show : Hide} .8s ease-in-out forwards;
    word-wrap: break-word
`;

export const Title = styled.h3`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    text-align: left;
    font-size: 20px;
    line-height: 40px;
    font-weight: 500;
    cursor: pointer;
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid #000;
    }
`;

export const Arrow = styled.div<IShowProps>`
    padding: 5px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    transition: .2s ease-in-out;
    transform: ${props => props.visible ? 
    "rotate(135deg) translate(-50%, 50%)" : 'rotate(-45deg) translate(50%, -50%)'};
`;

export const Span = styled.span`
    overflow: hidden;
    flex-grow: 1;
`;

export const ParamsList = styled.ul<IShowProps>`
    font-size: 16px;
    transform: translateY(-100%);
    animation: ${props => props.visible ? Show : Hide} .8s ease-in-out forwards;
`;

export const ParamsListItem = styled.li`
    padding: 10px 10px 5px 30px;
    display: flex;
    justify-content: space-between;
`;

export const ParamName = styled.span`
    position: relative;
    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 10px;
        height: 10px;
        padding: 10px;
        background: #000;
        transform: translate(-130%, -50%);
    }

    ::after {
        content: '';
        position: absolute;
        box-sizing: border-box;
        left: 0;
        top: 50%;
        width: 10px;
        height: 10px;
        background: #fff;
        transform: translate(-130%, -50%);
    }
`