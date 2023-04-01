import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    position: relative;
    width: 100%;
`
const LabelWrapper = styled.label`
    position: absolute;
    padding: 0 1rem;
    left: 1.4rem;
    top: ${props => props.focused || props.value ? '0' : '50%'};
    font-size: ${props => props.focused || props.value ? props.fontSize ?  props.fontSize : '1rem' : '1.4rem'};
    transform:  ${props => props.focused || props.value ? 'translateY(-50%)' : 'translateY(-50%)'};
    color: ${props => props.focused || props.value ? '#fc8507' : 'inherit'};
    background-color: white;
    transition: all .1s;
`

const InputWrapper =  styled.input`
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
`

const TextareaWrapper = styled.textarea`
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
`




export default ({ placeholder, id, type, value, onChange, padding, width, fontSize }) => {

    const [focused, setFocused] = React.useState(false)
    
    const onFocus = (ev) => {
        setFocused(true)
    } 

    const onBlur = (ev) => {
        setFocused(false)
    }

    return (
        <>
            <Wrapper>
                <LabelWrapper fontSize={fontSize&&parseFloat(fontSize.split('rem')[0])+0.4+'rem'} value={value} htmlFor={id} focused={focused}>{ placeholder }</LabelWrapper>
                {
                    type !== 'textarea' ?
                        <InputWrapper fontSize={fontSize} width={width} padding={padding} value={value} id={id} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/> :
                        <TextareaWrapper padding={padding} value={value} id={id} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/>
                }
            </Wrapper>  
        </>
    )
}
