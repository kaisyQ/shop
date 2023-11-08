import React from 'react';
import styled from 'styled-components';

interface IPageButtonProps {
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = styled.button`
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    margin: 0 8px;
    border: 2px solid #000;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #000;
        color: white;
    }

    &:disabled {
        background-color: #ccc;
        color: #666;
        cursor: not-allowed;
        border-color: #ccc;
    }
`;

const PageButton: React.FC<React.PropsWithChildren<IPageButtonProps>> = (props) => {
    return (
        <>
            <Button onClick={props.onClick}>
            
                {
                    props.children  
                }

            </Button>
        </>
    );
}


export default PageButton;