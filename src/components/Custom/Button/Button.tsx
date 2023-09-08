import styled from "styled-components";


interface IButtonProps {
    padding?: string,
    isReverse?: boolean,
    width?: string
}


export default styled.button<IButtonProps>`
    padding: ${props => props.padding ? props.padding : '1.3rem 4rem'};
    
    width: ${props => props.width ? props.width : null};
    
    border: .1rem solid ${props => props.isReverse ? '#000' :  '#fff'};

    font: inherit;
    font-size: 1.6rem;

    :disabled {
        opacity: .8;
    }

    
    :hover {
        
        transform: scale(105%);
        
        color: ${props => props.isReverse ? '#000' :  '#fff'};
        
        background-color: ${props => props.isReverse ? '#fff' :  '#000'};;
        
        transition: .2s ease-in-out;
        
    }

    :disabled:hover {
        
        transform: scale(1);
        
        color: ${props => props.isReverse ? '#fff' :  '#000'};
        
        background-color: ${props => props.isReverse ? '#000' :  '#fff'};
        
        transition: .2s ease-in-out;

        cursor: not-allowed;
    }


    :not(:hover) {
        
        transform: scale(1);
        
        color: ${props => props.isReverse ? '#fff' :  '#000'};
        
        background-color: ${props => props.isReverse ? '#000' :  '#fff'};
        
        transition: .2s ease-in-out;
    
    }
`;