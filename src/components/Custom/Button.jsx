import styled from "styled-components"

export default styled.button`
    padding: ${props => props.padding ? props.padding : '1.3rem 4rem'};
    color: ${props => props.isReverse ? '#fc8507' :  'white'};
    background-color: ${props => props.isReverse ? 'white' :  '#fc8507'};
    width: ${props => props.width ? props.width : null};
    border: .1rem solid #fc8507;
    :hover {
        transform: scale(105%);
        color: ${props => props.isReverse ? '#fc8507' :  'white'};
        background-color: ${props => props.isReverse ? 'white' :  '#fc8507'};;
        transition: .2s ease-in-out;
        
    }


    :not(:hover) {
        transform: scale(1);
        color: ${props => props.isReverse ? 'white' :  '#fc8507'};
        background-color: ${props => props.isReverse ? '#fc8507' :  'white'};
        transition: .2s ease-in-out;
    }
`