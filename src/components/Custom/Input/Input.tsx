import React from "react";

import { Wrapper, LabelWrapper, InputWrapper, TextareaWrapper } from "./InputStyles";

import InputError from "./InputError/InputError";

interface IInputProps {
    placeholder: string,
    id: string,
    type?: 'textarea' | 'input',
    value: string, 
    padding?: string,
    width?: string, 
    fontSize?: string,
    minHeight?: string,
    inputType?: string,
    error?: string,
    onBlur?: (ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}


const Input: React.FC<IInputProps> = (props) => {

    const { 
        placeholder, id, type, 
        value, onChange, padding, 
        width, fontSize, minHeight,
        inputType, onBlur, error
    } = props;
    
    const [focused, setFocused] = React.useState(false);
    
    const onFocusHandler = (ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocused(true);
    } 

    const onBlurHadler = (ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocused(false);
        
        if (onBlur) {
            onBlur(ev);
        }
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
                    type !== 'textarea' ? <>
                            <InputWrapper 
                                type={inputType || "text"} 
                                fontSize={fontSize} 
                                width={width} 
                                padding={padding} 
                                value={value} 
                                id={id} 
                                onFocus={onFocusHandler} 
                                onBlur={onBlurHadler} 
                                onChange={onChange}
                            /> 
                        </> : <>
                            <TextareaWrapper 
                                id={id}
                                minHeight={minHeight} 
                                padding={padding} 
                                value={value} 
                                onFocus={onFocusHandler} 
                                onBlur={onBlurHadler} 
                                onChange={onChange}
                            />
                        </>
                }   

                { error ? <InputError text={error} /> : null }
            </Wrapper>  
        </>
    );
}

export default Input