import styled, { keyframes } from "styled-components"


interface ISidebarProps {
    isOpen: boolean
}

export const openSidebar = (props: ISidebarProps) => keyframes`
    from { width: 0 }
    to { 
        @media only screen and (max-width: 768px){
            width: ${props.isOpen ? '40rem' : '0'};
        }
        
        @media only screen and (max-width: 330px){
            width: ${props.isOpen ? '30rem' : '0'};
        }
    }
    
`;



export const SidebarWrapper = styled.div<ISidebarProps>`
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100%;
    background-color: white;
    animation-duration: 0.3s;
    animation-name: ${openSidebar};
    z-index: 10;
    
    @media only screen and (max-width: 1200px) {
        display: none;
    }

    @media only screen and (max-width: 768px){
        width: ${props => props.isOpen ? '60%' : '0'};
        display: block;
    }
    
    @media only screen and (max-width: 330px){
        width: ${props => props.isOpen ? '60%' : '0'};
        display: block;
    }
`


export const ListWrapper = styled.ul`
    padding: 5rem;
    
    @media only screen and (max-width: 330px){
        padding: 5rem 2rem 5rem 2rem;
    }
`

export const Item = styled.li`
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
    line-height:1.6rem;
    text-transform: capitalize;
    text-align: left;
    display: flex;
    align-items: center;
    column-gap: .5rem;

    :hover{
        color: #993255;
        text-decoration: underline;
    }
`