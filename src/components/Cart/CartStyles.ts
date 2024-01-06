import styled from 'styled-components';



export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const CartContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Subtotal = styled.p`

`;

export const CartFooter = styled.footer`
    text-align: right;
    margin-right: 20px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 330px) {
        align-items: center;
        margin-right: 0;
    }
`;

const Message = styled.h1`
    font-size: 43px;
    font-weight: 500;
    margin: 0 10px;

    @media only screen and (max-width: 400px) {
        font-size: 40px;
    }

    @media only screen and (max-width: 330px) {
        font-size: 30px;
    }

    @media only screen and (max-width: 280px) {
        font-size: 25px;
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

