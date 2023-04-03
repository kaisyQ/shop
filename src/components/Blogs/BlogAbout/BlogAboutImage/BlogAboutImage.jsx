import React from "react"

import styled from "styled-components"

const Wrapper = styled.img`
    width: 100%;
    object-fit: cover;
`

export default ({ src, setArrOfBlogStruct }) => {
    return (
        <>
            <Wrapper src={src} />
        </>
    )
}