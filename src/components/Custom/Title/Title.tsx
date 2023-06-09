import styled from "styled-components"


interface ITitleProps {
    fontSize?: string
}

export default styled.h2<ITitleProps>`
    display: flex;
    justify-content: space-between;
    font-size: ${props => props.fontSize ? props.fontSize : '4rem'};
    font-weight: 500;
    color: #000;
`