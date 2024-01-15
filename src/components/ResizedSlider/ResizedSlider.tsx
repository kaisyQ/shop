import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Button } from '@nextui-org/react';

interface IResizedSliderProps {
    images: Array<string>
}

const Wrapper = styled(motion.div)`
    z-index: 228;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100svw;
    height: 100svh;
    background-color: #000;
`;

const Container = styled.div`
    position: relative;
`;

const Image = styled.img`
    width: 100svw;
    height: 100svh;
    object-fit: contain;
`;

const CloseButton = styled(motion.div)`
    display: block;
    position: absolute;
    top: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
`;

const CrossIcon = styled(motion.div)`
    width: 50px;
    height: 50px;
    position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 2px;
    background-color: #000;
    top: 50%;
    left: 50%;
  }

  
  &::before {
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }
`

const ResizedSlider:React.FC<IResizedSliderProps> = (props) => {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    
    return (
        <>
            <Wrapper
            >


                <Container>

                    <CloseButton>
                        <CrossIcon />
                    </CloseButton>

                    <Slider
                        {...settings}
                    >
                        {
                            props.images.map((image, index) => <>
                                <Image key={index} src={image} />
                            </>)
                        }
                    </Slider>

                </Container>

            </Wrapper>
        </>
    );
}

export default ResizedSlider;