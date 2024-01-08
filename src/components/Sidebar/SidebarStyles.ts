import styled, { keyframes } from "styled-components"


interface ISidebarProps {
    isOpen: boolean
}

export const openSidebar = (props: ISidebarProps) => keyframes`
    from { width: 0 }
    to { 
        @media only screen and (max-width: 768px){
            width: ${props.isOpen ? '400px' : '0'};
        }
        
        @media only screen and (max-width: 330px){
            width: ${props.isOpen ? '300px' : '0'};
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
    z-index: 9999;
    
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
    padding: 20px 10px;
`

export const Item = styled.li`
    padding: 10px 15px;
    font-size: 18px;
    line-height: 16px;
    text-transform: capitalize;
    text-align: left;
    display: flex;
    align-items: center;
    column-gap: 10px;
`;
