import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { PropsWithChildren } from 'react';
import Slider from 'react-slick';
import useWindowWidth from 'hooks/useWindowWidth';
import { NextArrow, PrevArrow, Wrapper } from './SliderElements';


interface Props {
    autoplay?: boolean,
    slidesCount?: number
}

const SimpleSlider: React.FC<PropsWithChildren<Props>> = (props) => {

    const width = useWindowWidth();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: props.autoplay,
        adaptiveHeight: true
    };

    return (
        
        <Wrapper width={width - 40}>
        
            <Slider {...settings}>
        
                {props.children}

            </Slider>
        
        </Wrapper>
    );

}

export default SimpleSlider;