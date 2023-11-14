import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { API_URL } from 'constants/constants';
import useWindowWidth from 'hooks/useWindowWidth';
import { NextArrow, PrevArrow } from './SliderElements';


interface Props {
    images: Array<string>
}

interface WrapperProps {
    width?: number
}
const Wrapper = styled.div<WrapperProps>`
    max-width: ${props=> props.width ? `${props.width}px` : '330px'};
`;

const SimpleSlider: React.FC<Props> = (props) => {

    const width = useWindowWidth();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return (
        <Wrapper width={width-40}>
            <h2> Single Item</h2>
            <Slider {...settings}>
                {props.images.map((image, index) =>
                    <div key={index}>
                        <img src={`${API_URL}${image}`} alt="" />
                    </div>
                )}
            </Slider>
        </Wrapper>
    );

}

export default SimpleSlider;