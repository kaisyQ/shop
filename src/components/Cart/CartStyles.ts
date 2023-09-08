import styled from 'styled-components';



export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const CartContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Subtotal = styled.p`

`;

export const CartFooter = styled.footer`
    text-align: right;
    margin-right: 2rem;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media only screen and (max-width: 330px) {
        align-items: center;
        margin-right: 0rem;
    }
`;

const Message = styled.h1`
    font-size: 4.3rem;
    font-weight: 500;
    margin: 0 1rem;

    @media only screen and (max-width: 400px) {
        font-size: 4rem;
    }

    @media only screen and (max-width: 330px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 280px) {
        font-size: 2.5rem;
    }
`;



const NavigateBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const NavigateBtn = styled.button`
    position: relative;
    font: inherit;
    font-size: 2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    
    ::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 0;
        height: 1px;
        transition: .3s ease-in-out;
        background: #000;
    }

    :hover::after {
        width: 100%;
        transition: .3s ease-in-out;
    }    
`;

export default {

    Wrapper, CartContainer, CartFooter, Subtotal, Message, NavigateBtn, NavigateBtnWrapper
};

