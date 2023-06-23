import styled, { keyframes } from "styled-components";


const show = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }    
`;

const show2 = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }    
`;



interface IModalProps {
    block : string
}

export const Modal = styled.div<IModalProps>`
    display: ${props => props.block};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
    z-index: 9999;
    opacity: 0;
    animation: ${show2} .5s ease-in-out forwards;
`;

export const ModalContentWrapper = styled.div`
    position: relative;
    height: 100%;
`;

export const ModalContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 1024px;
    max-height: 900px;
    width: 100%;
    aspect-ratio: 1/1;
    padding: 7rem;
    animation: ${show} .7s ease-in-out forwards;
`;

export const ResizedImageContent = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: .5rem solid #000;
`;

