import styled from "styled-components";


interface ICardTitleProps {
    size?: string,
    color: string
}


interface ICardHoveredProps {
    isHovered: boolean
}

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    width: 47%;
    height: 40rem;
    text-align: left;
    cursor: pointer;
    :hover{
        border-color: #ac3b61;
        transition: .4s ease-in-out;
    }
    z-index: 1;

    @media only screen and (max-width: 1200px) {
        width: 47%;
    }

    @media only screen and (max-width: 768px) {
        width: 48%
    }

    @media only screen and (max-width: 330px) {
        width: 100%
    }
`;

export const CardImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
`;

export const CardImage = styled.img<ICardHoveredProps>`
    width: 100%;
    height: 100%;
    object-fit: fill;

    transform: ${props => props.isHovered ? 'scale(110%)' : 'scale(1)'};
    transition: .4s ease-in-out;
`;

export const CardInfoWrapper = styled.div<ICardHoveredProps>`
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;    
    height: 100%;
    background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%);
    z-index: 2;
    

    transform: ${props => props.isHovered ? 'scale(1)' : 'scale(0)'};
    opacity: ${props => props.isHovered ? '1' : '0'};;
    transition: .4s ease-in-out;


    @media only screen and (max-width: 1200px) {
        display: block;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }

    @media only screen and (max-width: 330px) {
        display: none;
    }
`;

export const CardInfoContainer = styled.div`
    position: relative;
    left: 0;
    top: 60%;
    padding: 1rem;
`;

export const CardInfo = styled.div`

`;

export const CardInfoItem = styled.div`
    margin: 1rem 0;
    padding-left: 1rem;
    max-width: 40rem;

`

export const CardTitle = styled.h3<ICardTitleProps>`
    position: relative;
    display: inline-block;
    font-size: ${props => props.size};
    letter-spacing: .1rem;
    font-weight: 500;
    
    :not(:hover){
        transition: .3s ease-in-out;
        transform: scale(1);
        color: ${props => props.color};
    }
    
    :hover{
        transition: .3s ease-in-out;
        transform: scale(103%);
        color: #c2c1c1
    }
`;

export const CardAbout = styled.div`
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