import React from "react"

import styled, { keyframes } from "styled-components"


const Wrapper = styled.div`
    
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const Text = styled.p`
    font-size: 1.6rem;
    text-indent: 2.5rem;    
    text-align: justify;
`

const Title = styled.h3`
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    text-align: left;
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 500;
    cursor: pointer;
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: .1rem solid #000;
    }
`

const Arrow = styled.div`
    position: absolute;
    right: 1rem;
    top: 50%;
    padding: .5rem;
    border-left: .1rem solid #000;
    border-bottom: .1rem solid #000;
    transition: .2s ease-in-out;
    transform: ${props => props.visible ? "rotate(135deg) translate(-50%, 50%)" : 'rotate(-45deg) translate(50%, -50%)'};
`

const Span = styled.span`
`

const ParamsList = styled.ul`
    font-size: 1.6rem;
`
const ParamsListItem = styled.li`
    padding: 1rem 1rem .5rem 3rem;
    display: flex;
    justify-content: space-between;
`
const ParamName = styled.span`
    position: relative;
    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        background: #fc8507;
        transform: translate(-130%, -50%);
    }

    ::after {
        content: '';
        position: absolute;
        box-sizing: border-box;
        left: 0;
        top: 50%;
        width: 1rem;
        height: 1rem;
        background: #fff;
        transform: translate(-130%, -50%);
    }
`

const Block = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    background-color: #fc8507;
    position: relative;

    z-index: -1;
    ::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        height: 1rem;
        width: 1rem;
        background-color: #fff;
        transform: translate(-50%, -50%);
    }

`

export default ({text, title, params, imageIndex}) => {
    
    const [visibleText, setVisibleText] = React.useState(false)
    
    return (
        <>
            <Wrapper>
                <Section>
                    <Title onClick={(ev) => { setVisibleText(prev => !prev) }}>
                        <Block />
                        <Span>{ title }</Span>
                        <Arrow visible={visibleText} />
                    </Title>

                    { visibleText ?
                        params ? <>
                        <ParamsList>
                        { Object.keys(params).map((param, index) => 
                            <ParamsListItem key={param}>
                                <ParamName>
                                    { param }
                                </ParamName>
                                <span>{ params[param] }</span>
                            </ParamsListItem>)}
                        </ParamsList> 
                    </> : <Text visible={visibleText}>{ text }</Text> : <></> }
                </Section>                
            </Wrapper>
        </>
    )
}