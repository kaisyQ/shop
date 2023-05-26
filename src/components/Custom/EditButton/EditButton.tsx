import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Wrapper } from "./EditButtonStyles";

interface IEditButtonProps {
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default ({ onClick }: IEditButtonProps) => {
    return (
        <>
            <Wrapper onClick={onClick}>
                <Icon.PencilSquare size={'2rem'} cursor={'pointer'} />
            </Wrapper>
        </>
    );
}