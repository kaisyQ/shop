import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    min-height: 33rem ;
    background: #cacaca;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Title = styled.h2`
    font-size: 4rem;
    font-style: italic;
    color: #524e4e;
    text-decoration: underline;
`

export default ({ noImageClick }) => {
    
    const wrapperClick = (ev) => {
        noImageClick()
    }

    return (
        <>
            <Wrapper onClick={wrapperClick}>
                <Title>No image</Title>
            </Wrapper>
        </>
    )
}