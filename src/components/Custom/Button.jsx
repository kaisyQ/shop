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

    @media only screen and (max-width: 850px){
        padding: ${props => props.withBaseResponse ? props.padding ? props.padding : '1.3rem 3rem' : '1.3rem 4rem'};
    }

    @media only screen and (max-width: 520px){
        padding: ${props => props.withBaseResponse ? props.padding ? props.padding : '1.3rem 1.5rem' : '1.3rem 4rem'};
    }

    @media only screen and (max-width: 390px){
        padding: ${props => props.withBaseResponse ? props.padding ? props.padding : '1.3rem .3rem' : '1.3rem 4rem'};
    }

    @media only screen and (max-width: 330px){
        padding: ${props => props.withBaseResponse ? props.padding ? props.padding : '1.3rem 4rem' : '1.3rem 4rem'};
    }

    @media only screen and (max-width: 270px){
        padding: ${props => props.withBaseResponse ? props.padding ? props.padding : '1.3rem 2rem' : '1.3rem 4rem'};
    }


`