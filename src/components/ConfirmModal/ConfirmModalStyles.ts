import styled from "styled-components";

export const ConfirmModalWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 330px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    z-index: 9999;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  font-weight: 500;
  text-align: left;
`;

export const ModalMessage = styled.p`
  margin: 2rem;
  word-wrap: break-word;
  text-align: left;
`;

export const Timer = styled.div`
    margin: 1rem;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
`;