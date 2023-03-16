import React from "react"

import styled from "styled-components"

const SliderWrapper = styled.div`
    width: 100%;
`

const Slider = styled.div`
    width: 100%;
    height: 35rem;
    background-color: #b19595;
    overflow: hidden;
`

const Block = styled.div`
    width: 105rem;
    height: 100%;
    display: flex;
    transition: .5s ease-in-out;
    transform: translateX(${props => props.clickCnt ? -props.clickCnt*35 + 'rem' : 'none'});
    z-index: 1;
`

const SliderItem = styled.img`
    display: block;
    width: 35rem;
    height: 35rem;
    background-color: ${props => props.background};
`

const Controller = styled.div`
    background-color: black;
    height: 100%;
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


export default ({ images }) => {

    const [clickCnt, setClickCnt] = React.useState(0)


    return (
        <>
                <SliderWrapper>
                    <Slider>
                        <Block clickCnt={clickCnt}>
                        {
                            images.map((image, index) => <SliderItem key={index} src={image}/>)
                        }
                        </Block>
                    </Slider>
                    <Controller>
                        <ControllerBtn onClick={() => {setClickCnt(cnt => cnt-1)}}>Prev</ControllerBtn>
                        <CircleBtns>
                        {
                            images.map((image, index) =>  <CircleBtn key={index} onClick={() => {setClickCnt(index)}} />)
                        }
                        </CircleBtns>
                        <ControllerBtn onClick={() => {setClickCnt(cnt => cnt+1)}}>Next</ControllerBtn>
                    </Controller>
                </SliderWrapper>
        </>
    )
}