import styled from "styled-components"


interface ITitleProps {
    fontSize?: string
}

export default styled.h2<ITitleProps>`
    font-size: ${props => props.fontSize ? props.fontSize : '4rem'};
    font-weight: 500;
    position: relative;
    color: #000;
    text-align: left;
`