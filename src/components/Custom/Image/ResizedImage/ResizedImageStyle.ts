import styled from "styled-components";

interface IModalProps {
    block : string
}

export const Modal = styled.div<IModalProps>`
    display: ${props => props.block && props.block};
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999;
    transform: scale(1.2);
`;

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
`;

export const ResizedImageContent = styled.img`
    margin-bottom: 1.4rem;
`;

export const CloseBtn = styled.a`
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`;

export const BtnTextSpan = styled.span`
    padding: 1rem 2rem;
    font-size: 1.6rem;
    text-transform: capitalize;
    text-align: left;
    background: #fff;
    color: #000;
    border: .1rem solid #000;
    border-radius: 0;
    transition: .6s ease-in-out;

    :hover{
        border: .1rem solid #fff;
        border-radius: 30%;
        transition: .6s ease-in-out;
    }
`;