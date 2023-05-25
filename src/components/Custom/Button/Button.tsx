import styled from "styled-components";


interface IButtonProps {
    padding?: string,
    isReverse?: boolean,
    width?: string
}


export default styled.button<IButtonProps>`
    padding: ${props => props.padding ? props.padding : '1.3rem 4rem'};
    
    color: ${props => props.isReverse ? '#fc8507' :  '#fff'};

    background-color: ${props => props.isReverse ? '#fff' :  '#fc8507'};
    
    width: ${props => props.width ? props.width : null};
    
    border: .1rem solid #fc8507;
    
    font-size: inherit;
    
    :hover {
        
        transform: scale(105%);
        
        color: ${props => props.isReverse ? '#fc8507' :  '#fff'};
        
        background-color: ${props => props.isReverse ? '#fff' :  '#fc8507'};;
        
        transition: .2s ease-in-out;
        
    }


    :not(:hover) {
        
        transform: scale(1);
        
        color: ${props => props.isReverse ? '#fff' :  '#fc8507'};
        
        background-color: ${props => props.isReverse ? '#fc8507' :  '#fff'};
        
        transition: .2s ease-in-out;
    
    }
`;