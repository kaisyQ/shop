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
    animation: ${openSidebar} .3s ease-in-out forwards;
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
    padding: 2rem 1rem;
`

export const Item = styled.li`
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    line-height:1.6rem;
    text-transform: capitalize;
    text-align: left;
    display: flex;
    align-items: center;
    column-gap: 1rem;

    :hover{
        color: #993255;
        text-decoration: underline;
    }
`;

export const Span = styled.span`
    position: relative;
    ::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: .1rem;
        background-color: #000;

    }
`;