import React from 'react';
import styled from 'styled-components';



interface IButton {
    current?: boolean
}

interface IPageButtonProps extends IButton {
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void,
}


const Button = styled.button<IButton>`
    background-color: ${props => props.current ? '#000' : "#fff"};
    color: ${props => props.current ? '#fff' : "#000"};;
    padding: 10px 20px;
    margin: 0 8px;
    border: 2px solid #000;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #000;
        color: white;
    }

    @media only screen and (max-width: 400px) {
        padding: 8px 12px;
        
    }
`;

const PageButton: React.FC<React.PropsWithChildren<IPageButtonProps>> = (props) => {
    return (
        <>
            <Button onClick={props.onClick} current={props.current} disabled={props.current}>

                {
                    props.children
                }

            </Button>
        </>
    );
}


export default React.memo(PageButton);