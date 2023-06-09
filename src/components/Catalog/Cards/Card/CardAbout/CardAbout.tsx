import React from "react";

import Slider from "components/Slider/Slider";

import DimIcon from './../../../../Custom/Icons/DimIcon';
import SofaIcon from './../../../../Custom/Icons/SofaIcon';
import TruckIcon from './../../../../Custom/Icons/DeliveryIcon';

import CardAboutSection from "./CardAboutSection/CardAboutSection";

import { useParams } from "react-router-dom";

import { CardAboutConnectedProps } from "./CardAboutContainer";

import { Image } from "components/Custom/Image/Image";

import { 
    Wrapper, 
    SliderWrapper,
    ImagesWrapper,
    ImageRow,
    ImageWrapper,
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

                    <CardAboutSection title={'About Product'} text={item.description}>
                        <SofaIcon width="64" height="64" />
                    </CardAboutSection>

                    <CardAboutSection title={'Dimensions'} params={item.params}>
                        <DimIcon width="64" height="64" />
                    </CardAboutSection>

                    <CardAboutSection title={'About Delivery'} text={item.delivery} >
                        <TruckIcon width="64" height="64" />
                    </CardAboutSection>

                </InfoWrapper>
            </Wrapper>
        </>
    );
}

export default CardAbout;