import styled from "styled-components";


interface IBlockProps {
    size?: string,
    background?: string
}


export const CounterWrapper = styled.div`
    display: flex;
    column-gap: .1rem;
`;

export const BlockWrapper = styled.button<IBlockProps>`
    display: block;
    width: ${props =>props.size ? props.size : '3rem'};
    height: ${props =>props.size ? props.size : '3rem'};
    background-color: ${props =>props.background ? props.background : '#000'};
    color: ${props =>props.color ? props.color : '#fff'};
    text-align: center;
    line-height: ${props =>props.size ? props.size : '3rem'};
`;

export const ValueWrapper = styled.div<IBlockProps>`
    width: ${props =>props.size ? props.size : '3rem'};
    height: ${props =>props.size ? props.size : '3rem'};
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: ${props =>props.size ? props.size : '3rem'};
`;
