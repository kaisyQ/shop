import React from 'react';
import Slider from "react-slick";
import RegisterStep from './RegisterStep/RegisterStep';
import CodeStep from './CodeStep/CodeStep';
import styled from 'styled-components';

const SliderWrapper = styled.div`
    max-width: 568px;
`;

interface IStepSliderProps {
    isCodeStep: boolean
}

const StepSlider: React.FC<IStepSliderProps> = (props) => {

    const sliderRef = React.useRef<Slider>(null);
    
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    React.useEffect(() => {
        if(props.isCodeStep) {
            sliderRef?.current?.slickGoTo(1);
        }        

    }, [props.isCodeStep]);


    return (
        <>
            <SliderWrapper>
                <Slider {...settings} ref={sliderRef}>
                    <div>
                        <RegisterStep />
                    </div>
                    {
                        props.isCodeStep ? <div>
                            <CodeStep />
                        </div> : null
                    }
                </Slider>
            </SliderWrapper>
        </>
    );
}

export default StepSlider;