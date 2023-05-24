import React from 'react';

import styled from "styled-components"

interface ILabelProps {
    value: string,
    focused: boolean,
    fontSize?: string
}

interface IInputProps {
    fontSize?: string,
    padding?: string,
    width?: string
} 

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

export const LabelWrapper = styled.label<ILabelProps>`
    position: absolute;
    padding: 0 1rem;
    left: 1.4rem;
    top: ${props => (props.focused||props.value) ? '0' : '50%'};
    font-size: ${props => (props.focused||props.value)?props.fontSize?props.fontSize:'1rem':'1.4rem'};
    transform: translateY(-50%);
    color: ${props => (props.focused||props.value) ? '#fc8507' : 'inherit'};
    background-color: white;
    transition: .1s ease-in-out;
`

export const InputWrapper = styled.input<IInputProps>`
    padding: ${props => props.padding ? props.padding : '1.8rem 2.4rem'};
    font: inherit;
    font-size: ${props => props.fontSize ? props.fontSize : '1.8rem'};
    width: ${props => props.width ? props.width : "100%"};
    border: 0.1rem solid #afa7aa;
    color: inherit;

    :focus, :hover {
        outline: 0.1rem #fc8507 solid;
        border-color: #fc8507;
        background-color: #fff;
        transition: .2s ease-in-out;
        color: #000;
    }
`;

export const TextareaWrapper = styled.textarea<IInputProps>`
    padding: ${props => props.padding ? props.padding : '1.8rem 2.4rem'};
    font: inherit;
    font-size: 1.8rem;
    width: 100%;
    border: 0.1rem solid #afa7aa;


    :focus, :hover {
        outline: 0.1rem #fc8507 solid;
        border-color: #fc8507;
        background-color: #fff;
        transition: .4s ease-in-out;
    }
`;