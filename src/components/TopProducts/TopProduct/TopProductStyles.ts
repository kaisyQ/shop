
import styled from "styled-components";

interface ITopProductName {
    hovered: boolean
}

export const TopProductWrapper = styled.div`
`;


export const ImageWrapper = styled.div`
    width: 100%;
    position: relative;
    background-color: #000;
    border-radius: 14px;
    
    ::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.6), rgba(0,0,0,0));
        opacity: 0;
        transition: all .4s ease-in-out;
        border-radius: 14px;
        z-index: 999;
    }
    
    :hover::after { 
        opacity: 1;
        transition: all .4s ease-in-out;
    }
`;


export const TopProductInfo = styled.div<ITopProductName>`
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 90%;
    overflow: hidden;
    transform: translateX(-50%);
    font-size: 22px;
    color: #fff;
    z-index: 2222;
    transition: all .4s ease-in-out;
    color: ${props => props.hovered ? "#fff" : "inherit"};
    opacity: ${props => props.hovered ? "1" :  "0"};
`;

export const TopProductName = styled.div`
    font-size: 22px;
`;

export const TopProductPrice = styled.div`
    font-size: 20px;
    color: orange;
    margin-left: 5px;
`;