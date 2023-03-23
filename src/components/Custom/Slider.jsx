import React from "react"

import styled from "styled-components"


const SliderWrapper = styled.div`
    width: 100%;
`

const Slider = styled.div`
    height: ${props => props.height+'rem'};
    overflow: hidden;
`

const Block = styled.div`
    width: ${props => props.width+'rem'};
    background: rgb(252,133,7);
    background: linear-gradient(90deg, rgba(252,133,7,1) 16%, rgba(255,255,255,1) 49%, rgba(252,133,7,1) 83%);
    height: 100%;
    display: flex;
    z-index: 1;
    transition: .2s ease-in-out;
    transform: translateX(${props => props.clickCount && props.itemWidth ? -props.clickCount*props.itemWidth+'rem' : 'none'});
`

const SliderItem = styled.img`
    display: block;
    width: ${props => props.width+'rem'};
    height: ${props => props.width+'rem'};
    transition: .6s ease-in-out;
    visibility: ${props => props.current ? 'visible' : 'hidden'};
    opacity: ${props => props.current ? '1' : '0'};
    transform: scale(${props => props.current ? '100%' : '0'}) skew(${props => props.current ? 'none': !props.isRightClick ? '-40deg, -20deg' : '40deg, 20deg' }) ;
`

const Controller = styled.div`
    padding-top: 1.5rem;
    display: flex;
    justify-content: center;
    column-gap: 2rem;
`

const ControllerBtn = styled.button`
    padding: .8rem;
    border-bottom: .3rem solid black;
    border-left: .3rem solid black;
    transform:${props => props.isRight ?  "rotate(225deg)" : 'rotate(45deg)'};

    :hover {
    }
    :not(:hover) {
        transform: ${props => props.isRight ?  "rotate(-135deg)" : 'rotate(405deg)'};
        transition: .6s ease-in-out;
    }
`

const CircleBtns = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`

const CircleBtn = styled.div`
    height: ${props => 1.1+0.2*props.size+'rem'};
    width: ${props => 1.1+0.2*props.size+'rem'};
    border-radius: 50%;
    background: #000;
`


export default ({ images, width }) => {

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

    return (
        <>
            <SliderWrapper>
                <Slider height={width}>
                    <Block width={width*images.length} itemWidth={width} clickCount={clickCount}>
                    {
                        images.map((image, index) => <SliderItem 
                            current={index === clickCount} 
                            width={width} key={index} src={image} 
                            alt={"slider-image"} isRightClick={isRightClick} />)
                    }
                    </Block>
                </Slider>
                <Controller>
                    <ControllerBtn onClick={() => {
                        setClickCount(count => count-1)
                        setIsRightClick(false)
                    }}>
                    </ControllerBtn>
                    <CircleBtns>
                    {
                        images.map((img, index) => <CircleBtn key={index} size={index>=(images.length)/2?(images.length/2-1)-Math.abs(images.length/2-index):index} />)
                    }
                    </CircleBtns>
                    <ControllerBtn isRight={true} onClick={() => {
                        setClickCount(count => count+1)
                        setIsRightClick(true)
                    }}>
                    </ControllerBtn>
                </Controller>
            </SliderWrapper>
        </>
    )
}