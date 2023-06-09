import styled from "styled-components";

interface IPriceProps {
    crossedOut?: boolean
}

interface IImage {
    width?: string
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
    gap: 1.5rem;
    z-index: 1;

    @media only screen and (max-width: 1200px) {
        flex-direction: row;
        padding: 0 2rem;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 330px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;


`;

export const Title = styled.h3`
    position: relative;
    text-align: center;
    font-size: 3rem;
    letter-spacing: .1rem;
    color: #000;
    font-weight: 500;
    
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: .1rem solid #000;
    }
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
    column-gap: 1rem;
    align-items: center;
    justify-content: flex-start;
`;

export const Prise = styled.div<IPriceProps>`
    font-size: ${props => props.crossedOut ? '1.8rem' : '2.5rem'};
    text-decoration: ${props => props.crossedOut ? 'line-through' : 'none'};
    opacity: ${props => props.crossedOut ? '50%' : '0'};
    font-style: ${props => props.crossedOut ? 'normal' : 'italic'};
    font-weight: ${props => props.crossedOut ? '400' : '500'};
`;

export const DiscountPrice = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
`;


export const SliderWrapper = styled.div`
    margin-bottom: 1rem;
    max-width: 32rem;
    display: none;

    @media only screen and (max-width: 1200px) {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        display: block;
    }

    @media only screen and (max-width: 330px) {
        display: block;
    }
`;

export const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 48%;
    
    @media only screen and (max-width: 1200px) {
        display: flex;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }

    @media only screen and (max-width: 330px) {
        display: none;
    }
`;

export const ImageRow = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 2rem;   
`

export const ImageWrapper = styled.div<IImage>`
    overflow: hidden;
    max-width: ${props => props.width || '48%'};
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 32rem;
`