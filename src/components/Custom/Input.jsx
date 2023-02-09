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
    padding: 1.8rem 2.4rem;
    font: inherit;
    font-size: 1.4rem;
    width: 100%;
    border: 0.1rem solid #afa7aa;
    border-radius: .5rem;


    :focus, :hover {
        outline: 0.2rem #ac3b61 solid;
    }
`

const TextareaWrapper = styled.textarea`
    padding: 1.8rem 2.4rem;
    font: inherit;
    font-size: 1.4rem;
    width: 100%;
    border: 0.1rem solid #afa7aa;
    border-radius: .5rem;


    :focus, :hover {
        outline: 0.2rem #ac3b61 solid;
    }
`




const Input = ({ placeholder, id, type, value, onChange }) => {

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
                        <InputWrapper value={value} id={id} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/> :
                        <TextareaWrapper value={value} id={id} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/>
                }
            </Wrapper>
        </>
    )
}

const InputGenerator = (props) => {
    let id = 1
    return () => {
        id += 3
        return (
            <>
                <Input id={ id } { ...props } />
            </>
        )
    } 
}

export default InputGenerator