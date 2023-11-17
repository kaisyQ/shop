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
    color: ${props => props.current ? '#fff' : "#000"};
    width: 50px;
    height: 50px;
    border: 2px solid #000;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #000;
        color: white;
    }

    @media only screen and (max-width: 500px) {
        width: 45px;
        height: 45px;
        line-height: 45px;
    }

    @media only screen and (max-width: 400px) {
        width: 40px;
        height: 40px;
        line-height: 40px;
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