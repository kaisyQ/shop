import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Wrapper } from "./EditButtonStyles";

interface IEditButtonProps {
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void,
}


const EditButton: React.FC<IEditButtonProps> = ({ onClick }) => {
    return (
        <>
            <Wrapper onClick={onClick}>
                <Icon.PencilSquare size={'2rem'} cursor={'pointer'} />
            </Wrapper>
        </>
    );
}

export default EditButton;