import React from "react";

import { Wrapper, LabelWrapper, InputWrapper, TextareaWrapper } from "./InputStyles";

interface IInputProps {
    placeholder: string,
    id: string,
    type?: 'textarea' | 'input',
    value: string, 
    onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    padding?: string,
    width?: string, 
    fontSize?: string,
    minHeight?: string,
    inputType?: string
}


const Input: React.FC<IInputProps> = (props) => {

    const { 
        placeholder, id, type, 
        value, onChange, padding, 
        width, fontSize, minHeight,
        inputType
    } = props;
    
    const [focused, setFocused] = React.useState(false);
    
    const onFocus = (ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocused(true);
    } 

    const onBlur = (ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocused(false);
    }

    return (
        <>
            <Wrapper>
                <LabelWrapper 
                    fontSize={fontSize&&parseFloat(fontSize.split('rem')[0])+0.4+'rem'} 
                    value={value} 
                    htmlFor={id} 
                    focused={focused}
                    type={type ? type === 'input' ? "INPUT" : "TEXTAREA" : "INPUT"}
                >
                    { placeholder }
                </LabelWrapper>
                {
                    type !== 'textarea' ?
                        <InputWrapper type={inputType || "text"} fontSize={fontSize} width={width} padding={padding} value={value} id={id} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/> :
                        <TextareaWrapper minHeight={minHeight} padding={padding} value={value} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/>
                }
            </Wrapper>  
        </>
    );
}

export default Input