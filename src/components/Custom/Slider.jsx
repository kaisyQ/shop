import React from "react"

import styled from "styled-components"

import * as Icon from 'react-bootstrap-icons'

const SliderWrapper = styled.div`
    width: 100%;
`

const Slider = styled.div`
    min-height: 33rem;
    overflow: hidden;
    position: relative;
`

const Block = styled.div`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    z-index: 1;
    transition: .2s ease-in-out;
    transform: translateX(${props => props.clickCount ? -props.clickCount*33+'rem' : 'none'});
`

const SliderItem = styled.img`
    display: block;
    max-width: 33rem;
    min-height: 33rem;
    transition: .6s ease-in-out;
    visibility: ${props => props.current ? 'visible' : 'hidden'};
    opacity: ${props => props.current ? '1' : '0'};
    transform: scale(${props => props.current ? '100%' : '0'}) skew(${props => props.current ? 'none': !props.isRightClick ? '-40deg, -20deg' : '40deg, 20deg' }) ;
`

const Btn = styled.div`
    position: absolute;
    left: ${props => props.isRight ? null :'0' };
    right: ${props => props.isRight ? '0' : null };
    top: 0;
    
    width: 5rem;
    height: 100%;
    
    background: #fff;
    color: #000;

    opacity: 0.4;

    display: flex;
    align-items: center;
    justify-content: center;
` 

const CircleBtns = styled.div`
    padding: 1rem;
    
    border-radius: 2rem;
    
    display: flex;
    align-items: center;
    column-gap: 1rem;
    
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    
    background: #fff;

    opacity: .7;
`

const CircleBtn = styled.div`
    height: ${props => 1.1+0.2*props.size+'rem'};
    width: ${props => 1.1+0.2*props.size+'rem'};
    border-radius: 50%;
    background: #000;
    z-index: 5;
`


export default ({ images }) => {

    const [clickCount, setClickCount] = React.useState(0)
    const [isRightClick, setIsRightClick] = React.useState(false)

    React.useEffect(() => {
        if (clickCount<0) {
            setClickCount(images.length-1)
        }
        if(clickCount>images.length-1) {
            setClickCount(0)
        }
    }, [clickCount])

    const rightBtnClick = (ev) => {
        setClickCount(count => count+1)
        setIsRightClick(true)
    }

    const leftBtnClick = (ev) => {
        setClickCount(count => count-1)
        setIsRightClick(false)
    }

    return (
        <>
            <SliderWrapper>
                <Slider>
                    <Block width={33*images.length+'rem'} clickCount={clickCount}>
                    {
                        images.map((image, index) => <SliderItem 
                            current={index === clickCount} 
                            key={index} src={image} 
                            alt={"slider-image"} isRightClick={isRightClick} />)
                    }
                    </Block>
                    <Btn onClick={leftBtnClick}>
                        <Icon.ChevronLeft size={'4rem'} />
                    </Btn>
                    <Btn onClick={rightBtnClick} isRight={true}>
                        <Icon.ChevronRight size={'4rem'} />
                    </Btn>
                    <CircleBtns>
                    {
                        images.map((img, index) => 
                            <CircleBtn 
                                key={index} 
                                size={index>=(images.length)/2?(images.length/2-1)-Math.abs(images.length/2-index):index} 
                            />
                        )
                    }
                    </CircleBtns>
                </Slider>
            </SliderWrapper>
        </>
    )
}