import React from "react"

import { Wrapper, Slider, Block, SliderItem } from "./SliderStyles"


interface ISliderProps {
    images: string[]
}

export default ({ images }: ISliderProps) => {

    const sliderRef = React.useRef(null)
    return (
        <>
            <Wrapper>
                <Slider ref={sliderRef} >
                    <Block width={33*images.length+'rem'}>
                    {
                        images.map((image: string, index) => <SliderItem 
                            key={index} src={image} 
                            alt={"slider-image"} />)
                    }
                    </Block>
                </Slider>
            </Wrapper>
        </>
    )
}