import React from "react"

import styled from "styled-components"


const SliderWrapper = styled.div`
    width: 100%;
`

const Slider = styled.div`
    height: ${props => props.height+'rem'};
    background-color: black;
    overflow: hidden;
`

const Block = styled.div`
    width: ${props => props.width+'rem'};
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(182,70,70,1) 50%, rgba(0,0,0,1) 100%);
    height: 100%;
    display: flex;
    column-gap: 1rem;
    z-index: 1;
    transition: .5s ease-in-out;
    transform: translateX(${props => props.clickCount && props.itemWidth ? -props.clickCount*props.itemWidth+'rem' : 'none'});
`

const SliderItem = styled.img`
    display: block;
    width: ${props => props.width+'rem'};
    height: ${props => props.width+'rem'};
    transition: .6s ease-in-out;
    visibility: ${props => props.current ? 'visible' : 'hidden'};
    opacity: ${props => props.current ? '1' : '0'};
    transform: scale(${props => props.current ? '100%' : '0'}) skew(${props => props.current ? 'none': '20deg, 10deg' }) ;
`

const Controller = styled.div`
    background-color: black;
    display: flex;
    justify-content: space-between;
`

const ControllerBtn = styled.button`
    position: relative;
    padding: 1.5rem 3.5rem;
    color: white;
    background-color: black;
    font: inherit;
    transition: .3s ease-in-out;
    :hover {
        color: #ac3b61;
        transition: .3s ease-in-out;
    }
`

const BtnText = styled.span`
    position: relative;
    ::before {
        content: '';
        position: absolute;
        left: ${props => !props.isRight ? '-1rem' : 'none'};
        right: ${props => props.isRight ? '-2rem' : 'none'};
        top: 50%;
        transform: translate(-50%, -50%)  ${props => !props.isRight ? 'rotate(45deg)' :  'rotate(-135deg)'};
        width: 1.2rem;  
        height: 1.2rem;
        border-left: .1rem solid #fff;
        border-bottom: .1rem solid #fff;
    }
`

const CircleBtns = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`

const CircleBtn = styled.button`
    padding: .5rem;
    border-radius: 50%;
    background-color: #fff;
`


export default ({ images, width }) => {

    const [clickCount, setClickCount] = React.useState(0)

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
                    <Block width={width*images.length} itemWidth={width+1} clickCount={clickCount}>
                    {
                        images.map((image, index) => <SliderItem current={index === clickCount} width={width} key={index} src={image} alt={"slider-image"} />)
                    }
                    </Block>
                </Slider>
                <Controller>
                    <ControllerBtn onClick={() => {setClickCount(count => count-1)}}>
                        <BtnText isRight={false}>Prev</BtnText>
                    </ControllerBtn>
                    <CircleBtns>
                    {
                        images.map((image, index) =>  <CircleBtn key={index} onClick={() => {setClickCount(index)}} />)
                    }
                    </CircleBtns>
                    <ControllerBtn onClick={() => {setClickCount(count => count+1)}}>
                            <BtnText isRight={true}>Next</BtnText>
                    </ControllerBtn>
                </Controller>
            </SliderWrapper>
        </>
    )
}