import styled from 'styled-components';

interface WrapperProps {
    width?: number
}

const arrowStyles = `
    border-bottom: 6px solid;
    border-left: 6px solid;
    border-color: #000;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 9999;
`;

export const PrevArrow = styled.div<any>`
    ${arrowStyles};
    
    transform: translateY(-50%) rotate(45deg);
    left: 10px !important;
`;

export const NextArrow = styled.div<any>`
    ${arrowStyles};
    
    transform: translateY(-50%) rotate(-135deg);
    right: 10px !important;
`;

export const Wrapper = styled.div<WrapperProps>`
    max-width: ${props=> props.width ? `${props.width}px` : '330px'};
    margin: 0 auto;
    width: 100%;
    z-index: 200;
`;