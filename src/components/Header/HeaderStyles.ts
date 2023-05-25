import styled from "styled-components";


interface IMenuProps {
    isOpen: boolean
}

export const HeaderWrapper = styled.header`
    padding: 2.5rem 2.5rem 4rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 5;
`;

export const Logo = styled.img`
    display: block;
    width: 6rem;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    column-gap: 1rem;
`;


export const MenuWrapper = styled.div`
    position: absolute;
    display: none;
    width: 2rem;
    height: 100%;
    top: 50%;
    right: calc(100% + 1rem);
    transform: translateY(-50%);
    cursor: pointer;


    @media only screen and (max-width: 768px){
        display: block;
    }
`;

export const Menu = styled.div`
    position: relative;
    width: 2rem;
    top: 50%;
    height: 0rem;
    background-color: inherit;
    transform: translateY(-50%);
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