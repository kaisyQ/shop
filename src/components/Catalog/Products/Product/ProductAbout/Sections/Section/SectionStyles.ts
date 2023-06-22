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
    max-width: 33rem;
    margin-bottom: 2rem;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const InfoWrapper = styled.div`
    overflow: hidden;
    
`;

export const Text = styled.p<IShowProps>`
    font-size: 1.6rem;
    text-indent: 2.5rem;    
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
    gap: 3rem;
    text-align: left;
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 500;
    cursor: pointer;
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: .1rem solid #000;
    }
`;

export const Arrow = styled.div<IShowProps>`
    padding: .5rem;
    border-left: .1rem solid #000;
    border-bottom: .1rem solid #000;
    transition: .2s ease-in-out;
    transform: ${props => props.visible ? 
    "rotate(135deg) translate(-50%, 50%)" : 'rotate(-45deg) translate(50%, -50%)'};
`;

export const Span = styled.span`
    overflow: hidden;
`;

export const ParamsList = styled.ul<IShowProps>`
    font-size: 1.6rem;
    transform: translateY(-100%);
    animation: ${props => props.visible ? Show : Hide} .8s ease-in-out forwards;
`;

export const ParamsListItem = styled.li`
    padding: 1rem 1rem .5rem 3rem;
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
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        background: #000;
        transform: translate(-130%, -50%);
    }

    ::after {
        content: '';
        position: absolute;
        box-sizing: border-box;
        left: 0;
        top: 50%;
        width: 1rem;
        height: 1rem;
        background: #fff;
        transform: translate(-130%, -50%);
    }
`

export const Block = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    background-color: #fc8507;
    position: relative;

    z-index: -1;
    ::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        height: 1rem;
        width: 1rem;
        background-color: #fff;
        transform: translate(-50%, -50%);
    }

`;