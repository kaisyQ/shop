import React from "react"

import { Slider, Block, SliderItem } from "./SliderStyles"

import useWindowWidth from "hooks/useWindowWidth"
import { API_URL } from "constants/constants"


interface ISliderProps {
    images: string[]
}

export default ({ images }: ISliderProps) => {

    const width = useWindowWidth();
    
    return (
        <>
            <Slider width={(width-40).toString()+"px"} >
                <Block width={(width-40)*images.length+'px'}>
                {
                    images.map((image: string, index) => <SliderItem 
                        width={(width-40).toString()+"px"}
                        key={index} src={`${API_URL}${image}`} 
                        alt={"slider-image"} />)
                }
                </Block>
            </Slider>
        </>
    )
}