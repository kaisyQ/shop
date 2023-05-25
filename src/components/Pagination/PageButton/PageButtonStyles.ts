import styled from "styled-components";

interface IPageButtonWrapperProps {
    isCurrent: boolean  
}

export const Wrapper = styled.div<IPageButtonWrapperProps>`
    box-sizing: content-box;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    width: 4rem;
    background-color: ${props => props.isCurrent ? '#ac3b61' : 'black'};
    color: #fff;
`;