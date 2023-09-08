import styled from "styled-components";


interface IMenuProps {
    isOpen: boolean
}

export const HeaderWrapper = styled.header`
    padding: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: 2rem;

    @media only screen and (max-width: 768px){
        z-index: 5;
    }
    
    @media only screen and (max-width: 330px){
        justify-content: space-between;
    }
    
`;

export const Logo = styled.img`
    display: block;
    max-width: 30rem;
    width: 100%;
    object-fit: cover;
`;

export const Menu = styled.div`
    position: relative;
    width: 2rem;
    height: 2rem;
`;



export const MenuLine = styled.div<IMenuProps>`
    position: absolute;
    left: 0;
    top: 40%;
    height: 0.1rem;
    width: 2rem;
    background-color: ${props => !props.isOpen ? 'black' : 'inherit'};
    transform: translateY(-50%);
    transition: all .4s;

    ::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: ${props => !props.isOpen ? '0.6rem' : '0'};
        height: 0.1rem;
        width: 2rem;
        background-color: black;
        transform: rotate(${props => !props.isOpen ? '0' : '45deg'});
        transition: all .4s;
    }

    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: ${props => !props.isOpen ? '-0.6rem' : '0'};
        height: 0.1rem;
        width: 2rem;
        background-color: black;
        transform: rotate(${props => !props.isOpen ? '0' : '-45deg'});
        transition: all .4s;
    }
`;

export const LinkWrapper = styled.div`
    height: 100%;
    line-height: 100%;
    position: relative;
`;

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;