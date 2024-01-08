import styled from "styled-components";

interface IPriceProps {
    crossedOut?: boolean
}


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;
    gap: 30px;
    z-index: 1;
    max-width: 1200px;

    @media only screen and (max-width: 1200px) {
        flex-direction: row;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 48%;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const InfoHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.h3`
    text-align: left;
    font-size: 30px;
    color: #000;
    font-weight: 600;
    word-wrap: break-word;
`;

export const ZeroCountMessage = styled.h4`
    margin-left: 20px;
    padding: 10px 15px;
    font-size: 18px;
    font-weight: 500;
    background: #d62e2e;
    color: #fff;
    text-decoration: underline;
    border-radius: 5px;
`;

export const PriseWrapper = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;
    justify-content: flex-start;
`;

export const Prise = styled.div<IPriceProps>`
    font-size: ${props => props.crossedOut ? '22px' : '30px'};
    text-decoration: ${props => props.crossedOut ? 'line-through' : 'none'};
    opacity: ${props => props.crossedOut ? '70%' : '100%'};
    font-style: ${props => props.crossedOut ? 'normal' : 'italic'};
    font-weight: ${props => props.crossedOut ? '400' : '500'};
`;

export const DiscountPrice = styled.div`
    font-size: 30px;
    font-weight: 500;
`;


export const SliderWrapper = styled.div`
    margin-bottom: 10px;
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
    max-width: 320px;
`