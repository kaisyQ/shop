import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    position: relative;
`
const LabelWrapper = styled.label`
    position: absolute;
    left: 2.4rem;
    top: ${props => props.focused || props.value ? '0.6rem' : '50%'};
    font-size: ${props => props.focused || props.value ? '1rem' : '1.4rem'};
    transform:  ${props => props.focused || props.value ? '' : 'translateY(-50%)'};
    color: ${props => props.focused || props.value ? '#ac3b61' : 'inherit'};
    transition: all .1s;
`

const InputWrapper =  styled.input`
    padding: ${props => props.padding ? props.padding : '1.8rem 2.4rem'};
    font: inherit;
    font-size: 1.4rem;
    width: 100%;
    border: 0.1rem solid #afa7aa;
    color: inherit;

    :focus, :hover {
        outline: 0.1rem #ac3b61 solid;
        border-color: #ac3b61;
        background-color: #fff;
        transition: .2s ease-in-out;
        color: #000;
    }
`

const TextareaWrapper = styled.textarea`
    padding: 1.8rem 2.4rem;
    font: inherit;
    font-size: 1.4rem;
    width: 100%;
    border: 0.1rem solid #afa7aa;


    :focus, :hover {
        outline: 0.1rem #ac3b61 solid;
        border-color: #ac3b61;
        background-color: #fff;
        transition: .4s ease-in-out;
    }
`




export default ({ placeholder, id, type, value, onChange, padding }) => {

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
                <LabelWrapper value={value} htmlFor={id} focused={focused}>{ placeholder }</LabelWrapper>
                {
                    type !== 'textarea' ?
                        <InputWrapper padding={padding} value={value} id={id} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/> :
                        <TextareaWrapper padding={padding} value={value} id={id} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/>
                }
            </Wrapper>  
        </>
    )
}
