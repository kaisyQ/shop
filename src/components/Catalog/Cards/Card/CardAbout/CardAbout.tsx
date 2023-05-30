import React from "react";

import Slider from "components/Slider/Slider";

import CardAboutSection from "./CardAboutSection/CardAboutSection";

import { useParams } from "react-router-dom";

import { CardAboutConnectedProps } from "./CardAboutContainer";

import { 
    Wrapper, 
    SliderWrapper,
    ImagesWrapper,
    ImageRow,
    ImageWrapper,
    Image,
    InfoWrapper,
    Title,
    PriseWrapper,
    Prise,
    DiscountPrice,
    ZeroCountMessage
} from "./CardAboutStyles"


const CardAbout: React.FC<CardAboutConnectedProps> = ({ item }) => {

    const { id } = useParams();

    return (
        <>
            <Wrapper>

                <SliderWrapper>
                    <Slider images={item.imagesSrc}/>
                </SliderWrapper>

                
                <ImagesWrapper>
                    <ImageRow>
                        <ImageWrapper width={'100%'}>
                            <Image src={item.imagesSrc[0]}/>
                        </ImageWrapper>
                    </ImageRow>
                    <ImageRow>
                        <ImageWrapper>
                            <Image src={item.imagesSrc[1]}/>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image src={item.imagesSrc[2]}/>
                        </ImageWrapper>
                    </ImageRow>
                    <ImageRow>
                        <ImageWrapper width={'100%'}>
                            <Image src={item.imagesSrc[3]}/>
                        </ImageWrapper>
                    </ImageRow>
                    <ImageRow>
                        <ImageWrapper width={'100%'}>
                                <Image src={item.imagesSrc[4]}/>
                            </ImageWrapper>
                    </ImageRow>
                </ImagesWrapper>

                
                <InfoWrapper>


                    <Title>{ item.name }</Title>

                    <PriseWrapper>
                        <Prise crossedOut={ item.discountPrice ? true : false }>{item.price+'$'}</Prise>
                        { item.discountPrice ? <DiscountPrice>{item.discountPrice+'$'}</DiscountPrice> : <></> }
                        {
                            !item.count ? <ZeroCountMessage>Out of stock</ZeroCountMessage> : <></>
                        }
                    </PriseWrapper>

                    <CardAboutSection title={'About Product'} text={item.description} />

                    <CardAboutSection title={'Dimensions'} params={item.params} />

                    <CardAboutSection title={'About Delivery'} text={item.delivery} />

                </InfoWrapper>
            </Wrapper>
        </>
    );
}

export default CardAbout;