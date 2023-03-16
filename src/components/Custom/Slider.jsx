import React from "react"

import styled from "styled-components"

const SliderWrapper = styled.div`
    width: 100%;
`

const Slider = styled.div`
    height: ${props => props.height+'rem'};
    background-color: #b19595;
    overflow: hidden;
`

const Block = styled.div`
    width: ${props => props.width+'rem'};
    height: 100%;
    display: flex;
    transition: .5s ease-in-out;
    transform: translateX(${props => props.clickCount && props.itemWidth ? -props.clickCount*props.itemWidth+'rem' : 'none'});
    z-index: 1;
`

const SliderItem = styled.img`
    display: block;
    width: ${props => props.width+'rem'};
    height: ${props => props.width+'rem'};
`

const Controller = styled.div`
    background-color: black;
    display: flex;
    justify-content: space-between;
`

const ControllerBtn = styled.button`
    padding: 1.5rem 3.5rem;
    color: white;
    background-color: black;
    font: inherit;

`

const CircleBtns = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`

const CircleBtn = styled.button`
    padding: .7rem;
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
                        <Block width={width*images.length} itemWidth={width} clickCount={clickCount}>
                        {
                            images.map((image, index) => <SliderItem width={width} key={index} src={image}/>)
                        }
                        </Block>
                    </Slider>
                    <Controller>
                        <ControllerBtn onClick={() => {setClickCount(count => count-1)}}>Prev</ControllerBtn>
                        <CircleBtns>
                        {
                            images.map((image, index) =>  <CircleBtn key={index} onClick={() => {setClickCount(index)}} />)
                        }
                        </CircleBtns>
                        <ControllerBtn onClick={() => {setClickCount(count => count+1)}}>Next</ControllerBtn>
                    </Controller>
                </SliderWrapper>
        </>
    )
}