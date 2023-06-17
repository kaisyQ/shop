import React from "react";
import styled from "styled-components";

interface IInputProps {
    focused: boolean
}

const ModalInputWrapper = styled.div`
    width: 100%;
    color: #fff;
    padding: 2rem;
`

const Input = styled.input`
    width: 100%;
    color: #fff;
    border: 0;
    outline: 0;
    padding: 2rem;
    font-size: 1.8rem;
    font-family: inherit;
    border-bottom: .1rem solid #fff;
`




const ModalInput = () => {
    
    const [focused, setFocused] = React.useState(false);
    
    return (
        <>
            <ModalInputWrapper>
                    <Input />
            </ModalInputWrapper>
        </>
    );
}

export default ModalInput;