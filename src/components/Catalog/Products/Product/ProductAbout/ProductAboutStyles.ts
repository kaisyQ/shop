import styled from "styled-components";

interface IPriceProps {
    crossedOut?: boolean
}


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;
    gap: 3rem;
    z-index: 1;

    @media only screen and (max-width: 1200px) {
        flex-direction: row;
        align-items: center;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
`;

export const InfoHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Title = styled.h3`
    text-align: left;
    font-size: 3rem;
    color: #000;
    font-weight: 600;
    text-decoration: underline;
    word-wrap: break-word;
`;

export const ZeroCountMessage = styled.h4`
    margin-left: 2rem;
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    font-weight: 500;
    background: #d62e2e;
    color: #fff;
    text-decoration: underline;
    border-radius: .5rem;
`;

export const PriseWrapper = styled.div`
    display: flex;
    column-gap: 2rem;
    align-items: center;
    justify-content: flex-start;
`;

export const Prise = styled.div<IPriceProps>`
    font-size: ${props => props.crossedOut ? '2.2rem' : '3rem'};
    text-decoration: ${props => props.crossedOut ? 'line-through' : 'none'};
    opacity: ${props => props.crossedOut ? '70%' : '0'};
    font-style: ${props => props.crossedOut ? 'normal' : 'italic'};
    font-weight: ${props => props.crossedOut ? '400' : '500'};
`;

export const DiscountPrice = styled.div`
    font-size: 3rem;
    font-weight: 500;
`;


export const SliderWrapper = styled.div`
    margin-bottom: 1rem;
    display: none;

    @media only screen and (max-width: 1200px) {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        display: block;
    }
`;


export const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 32rem;
`