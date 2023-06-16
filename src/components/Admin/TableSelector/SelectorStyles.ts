import styled from "styled-components";

export const DropDownMenu = styled.nav`
    margin: auto 0;
`;


export const DropDownUl = styled.ul`
    display: flex; 
    flex-direction: row-reverse; 

    font-size: 2.2rem;

    @media only screen and (max-width: 768px){
        display: block;
        text-align: center;
    }
    
    @media only screen and (max-width: 330px){
        display: block;
        text-align: center;
    }
`;

export const DropDownTriggerLi = styled.li`

`;


