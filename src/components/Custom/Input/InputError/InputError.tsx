import React from 'react';
import { Wrapper, Text } from './InputErrorElements';

import { ExclamationDiamond } from 'react-bootstrap-icons';
interface IInputErrorProps {
    text?: string
}

const InputError: React.FC<IInputErrorProps> = ({ text }) => {
    return (
        <>
            <Wrapper>
                <ExclamationDiamond size={'2rem'} color='darkred'/>
                <Text>{ text }</Text>
            </Wrapper>
        </>
    );
}

export default InputError;