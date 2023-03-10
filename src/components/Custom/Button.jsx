import styled from "styled-components"

export default styled.button`
    padding: 1.3rem 4rem;
    color: #f8f1ee;
    background-color: black;
    width: ${props => props.width ? props.width : null};
    :hover {
        transform: scale(105%);
        color: #ac3b61;
        transition: .2s ease-in-out;
    }


    :not(:hover) {
        transform: scale(1);
        transition: .2s ease-in-out;
    }
`