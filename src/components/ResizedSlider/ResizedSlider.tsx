import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import styled from 'styled-components';

interface IResizedSliderProps {
    images: Array<string>,
    onClose: () => void,
    isVisible: boolean,
}

const Wrapper = styled(motion.div)`
    z-index: 228;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
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
    z-index: 229;
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const CrossIcon = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 70%;
        height: 2px;
        background-color: white;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }

    ${CloseButton}:hover &::before,
    ${CloseButton}:hover &::after {
        background-color: #ff0000;
        transform: scale(1.1);
    }
`

const ResizedSlider:React.FC<IResizedSliderProps> = (props) => {
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <>
            <AnimatePresence>
            {
                props.isVisible && (
                    <Wrapper
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                    >

                        <Container>

                            <CloseButton>
                                <CrossIcon  onClick={() => props.onClose()}/>
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
            )}
            </AnimatePresence>
        </>
    );
}

export default ResizedSlider;