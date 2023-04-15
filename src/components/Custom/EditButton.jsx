import React from "react"

import styled from "styled-components"

import * as Icon from 'react-bootstrap-icons'

const Wrapper = styled.div`
    
    position: absolute;
    left: 0;
    bottom: 100%;
    
    z-index: 20;
    
    :hover {

    }

    :not(:hover) {
        
    }
`

export default ({ onClick }) => {
    return (
        <>
            <Wrapper onClick={onClick}>
                <Icon.PencilSquare size={'2rem'} cursor={'pointer'} />
            </Wrapper>
        </>
    )
}