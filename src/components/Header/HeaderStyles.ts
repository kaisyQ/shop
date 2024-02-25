import styled from "styled-components";


interface IMenuProps {
    isOpen: boolean
}

interface ICartBagWrapper {
    count: number
}

export const HeaderWrapper = styled.header`
    padding: 0 25px 0 25px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: 20px;

    @media only screen and (max-width: 768px){
        z-index: 5;
    }
    
    @media only screen and (max-width: 330px){
        justify-content: space-between;
    }
    
`;

export const Logo = styled.img`
    display: block;
    max-width: 300px;
    width: 100%;
    object-fit: cover;
`;

export const Menu = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
`;



export const MenuLine = styled.div<IMenuProps>`
    position: absolute;
    left: 0;
    top: 40%;
    height: 1px;
    width: 20px;
    background-color: ${props => !props.isOpen ? 'black' : 'inherit'};
    transform: translateY(-50%);
    transition: all .4s;

    ::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: ${props => !props.isOpen ? '0.6rem' : '0'};
        height: 1px;
        width: 20px;
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
        height: 1px;
        width: 20px;
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
    gap: 10px;
`;

export const CartBagWrapper = styled.div<ICartBagWrapper>`
    position: relative;
    ::after {
        display: ${props => props.count > 0 ? 'block' : 'none'};
        content: "${props => props.count}";
        position: absolute;
        right: 50%;
        top: 50%;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #000;
        color: #fff;
        border-radius: 50%;
    }
`;