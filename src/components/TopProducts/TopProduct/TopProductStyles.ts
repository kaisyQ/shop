
import styled from "styled-components";

interface ITopProductName {
    hovered: boolean
}

export const TopProductWrapper = styled.div`
    width: 40%;
`;


export const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    background-color: #000;
    
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
    }
    
    :hover::after { 
        opacity: 1;
        transition: all .4s ease-in-out;
    }
`;

export const TopProductImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;



export const TopProductName = styled.div<ITopProductName>`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    width: 90%;
    overflow: hidden;
    transform: translateX(-50%);
    font-size: 2.2rem;
    color: #fff;
    z-index: 2222;
    transition: all .4s ease-in-out;
    color: ${props => props.hovered ? "#fff" : "inherit"};
    opacity: ${props => props.hovered ? "1" :  "0"};
    text-decoration: underline;
`;