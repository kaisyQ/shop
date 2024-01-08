import styled from "styled-components";


interface ITitleProps {
    size?: string
}

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    text-align: left;
    cursor: pointer;
    z-index: 1;
    
    :hover{
        border-color: #ac3b61;
        transition: .4s ease-in-out;
    }

    width: calc((100% / 3) - 20px);
    
    margin: 10px;

    @media only screen and (max-width: 800px) {
        width: calc((100% / 2) - 20px);
    }

    @media only screen and (max-width: 550px) {
        width: 100%;
    }
`;

export const CardImageWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    z-index: 1;
    position: relative;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    transition: .3s ease-in-out;
    transform: scale(100%);
    :hover {
        transition: .3s ease-in-out;
        transform: scale(120%);
    }
`;

export const CardInfoWrapper = styled.div`
    width: 100%;    
`;

export const CardInfoItem = styled.div`
    display: flex;
    column-gap: 10px;
`;

export const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: #000;
    padding: 10px;
`;

export const CardSale = styled.h3<ITitleProps>`
    position: absolute;
    left: 20px;
    top: 10px;
    z-index: 999;
    padding: 5px;
    background-color: #fff;
    border-radius: 50%;
`;

export const CardPrice = styled.div`
    position: absolute;
    left: 20px;
    bottom: 10px;
    padding: 7px 15px;
    font-size: 16px;
    background: #000;
    border-radius: 5px;
    color: orange;
    z-index: 10;
`;