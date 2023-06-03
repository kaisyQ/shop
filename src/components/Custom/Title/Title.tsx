import styled from "styled-components"


interface ITitleProps {
    fontSize?: string
}

export default styled.h2<ITitleProps>`
    font-size: ${props => props.fontSize ? props.fontSize : '4rem'};
    font-weight: 500;
    position: relative;
    display: inline-flex;
    color: #000;
    text-align: left;

    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: .1rem solid #000;
    }
`