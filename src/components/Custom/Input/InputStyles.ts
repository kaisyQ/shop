import styled from "styled-components"

type InputType = "TEXTAREA" | "INPUT";

interface ILabelProps {
    value: string,
    focused: boolean,
    fontSize?: string
    type?: InputType
}

interface IInputProps {
    fontSize?: string,
    padding?: string,
    width?: string,
    minHeight?: string
} 

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

export const LabelWrapper = styled.label<ILabelProps>`
    position: absolute;
    padding: ${props => (props.focused||props.value) ? '0 2rem' : "0"};
    left: 1.4rem;
    top: ${props => (props.focused||props.value) ? '0' : props.type==='INPUT'? '50%':'20%'};
    font-size: ${props => (props.focused||props.value)?props.fontSize?props.fontSize:'1rem':'1.4rem'};
    transform: translateY(-50%);
    color: ${props => (props.focused||props.value) ? '#000' : 'inherit'};
    background-color: white;
    transition: .1s ease-in-out;
`

export const InputWrapper = styled.input<IInputProps>`
    padding: ${props => props.padding ? props.padding : '1.8rem 2.4rem'};
    font: inherit;
    font-size: ${props => props.fontSize ? props.fontSize : '1.8rem'};
    width: ${props => props.width ? props.width : "100%"};
    color: inherit;
    border: 0.1rem solid #000;

    :focus, :hover {
        outline: 0.1rem #000 solid;
        border-color: #000;
        background-color: #fff;
        color: #000;
    }
`;

export const TextareaWrapper = styled.textarea<IInputProps>`
    padding: ${props => props.padding ? props.padding : '1.8rem 2.4rem'};
    font: inherit;
    font-size: 1.8rem;
    width: 100%;
    border: 0.1rem solid #000;

    min-height: ${props =>props.minHeight};

    :focus, :hover {
        outline: 0.1rem #000 solid;
        border-color: #000;
        background-color: #fff;
    }
`;