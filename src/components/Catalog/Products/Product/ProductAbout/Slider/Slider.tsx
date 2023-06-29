import React from "react"

import { Slider, Block, SliderItem } from "./SliderStyles"
import useWindowWidth from "hooks/useWindowWidth"


interface ISliderProps {
    images: string[]
}

export default ({ images }: ISliderProps) => {

    const sliderRef = React.useRef(null)

    const width = useWindowWidth();
    return (
        <>
            <Slider width={(width-40).toString()+"px"} >
                <Block width={(width-40)*images.length+'px'}>
                {
                    images.map((image: string, index) => <SliderItem 
                        width={(width-40).toString()+"px"}
                        key={index} src={image} 
                        alt={"slider-image"} />)
                }
                </Block>
            </Slider>
        </>
    )
}