import React from "react"

import styled from "styled-components"

const SliderWrapper = styled.div`
    max-height: 30rem;
`

const Slider = styled.div`
    max-height: 32rem;
    overflow-x: scroll;
    position: relative;
`

const Block = styled.div`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    column-gap: 1rem;
    z-index: 1;
    transition: .2s ease-in-out;
`

const SliderItem = styled.img`
    display: block;
    max-width: 30rem;
    min-height: 30rem;
    transition: .6s ease-in-out;
`

export default ({ images }) => {

    const sliderRef = React.useRef(null)
    return (
        <>
            <SliderWrapper>
                <Slider ref={sliderRef} >
                    <Block width={33*images.length+'rem'}>
                    {
                        images.map((image, index) => <SliderItem 
                            key={index} src={image} 
                            alt={"slider-image"} />)
                    }
                    </Block>
                </Slider>
            </SliderWrapper>
        </>
    )
}