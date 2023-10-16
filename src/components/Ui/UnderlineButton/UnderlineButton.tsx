import styled from 'styled-components';

const UnderlineBtn = styled.button`
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

export default UnderlineBtn;