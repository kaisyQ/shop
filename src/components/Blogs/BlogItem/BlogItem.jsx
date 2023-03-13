import React from "react"

import styled from "styled-components"

import { NavLink } from "react-router-dom"
import Button from "../../Custom/Button"


const BlogItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    row-gap: .5rem;
    width: 100%;
    height: 30rem;
    color: inherit;
    overflow: hidden;
`

const ItemImage = styled.img`
    display: block;
    height: 50%;
    width: 100%;
    object-fit: cover;

    :hover {
        transform: scale(105%);
        transition: .3s ease-in-out;
    }

    :not(:hover) {
        transform: scale(1);
        transition: .3s ease-in-out;
    }
`


const ItemTitle = styled.h3`
    position: relative;
    padding: 1rem 1rem;
    font-weight: 500;
`

const ButtonWrapper = styled.div`
    padding: 0 1rem;
`

export default ({ id, title, imageSrc }) => {
    const [isHover, setIsHover] = React.useState(false)

    const onBlogMouseOver = (ev) => {
        setIsHover(true)
    }

    const onBlogMouseOut = (ev) => {
        setIsHover(false)
    }

    return (
        <>
            <BlogItemWrapper onMouseOver={onBlogMouseOver} onMouseOut={onBlogMouseOut}>
                <ItemImage src={imageSrc} alt='card-image' />
                <ItemTitle>{ title }</ItemTitle>
                <ButtonWrapper>
                    <Button>Read More</Button>
                </ButtonWrapper>
            </BlogItemWrapper>
        </>
    )
}