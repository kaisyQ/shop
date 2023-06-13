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


const CardAbout: React.FC<CardAboutConnectedProps> = ({ product, fetchProductById }) => {

    const { id } = useParams();

    React.useEffect(() => {
        if (!id) {
            return;
        }
        fetchProductById(id);
    }, [id, fetchProductById]);


    if (!product) {
        return <>
            No product
        </>
    }

    return (
        <>
            <Wrapper>

                <SliderWrapper>
                    <Slider images={product.imagesSrc}/>
                </SliderWrapper>

                <ImagesWrapper>
                    <ImageRow>
                        <ImageWrapper width={'100%'}>
                            <Image src={product.imagesSrc[0]}/>
                        </ImageWrapper>
                    </ImageRow>
                    <ImageRow>
                        <ImageWrapper>
                            <Image src={product.imagesSrc[1]}/>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image src={product.imagesSrc[2]}/>
                        </ImageWrapper>
                    </ImageRow>
                    <ImageRow>
                        <ImageWrapper width={'100%'}>
                            <Image src={product.imagesSrc[3]}/>
                        </ImageWrapper>
                    </ImageRow>
                    <ImageRow>
                        <ImageWrapper width={'100%'}>
                                <Image src={product.imagesSrc[4]}/>
                            </ImageWrapper>
                    </ImageRow>
                </ImagesWrapper>
                
                <InfoWrapper>
                    <Title>{ product.name }</Title>

                    <PriseWrapper>
                        <Prise crossedOut={ product.discountPrice ? true : false }>{product.price+'$'}</Prise>
                        { product.discountPrice ? <DiscountPrice>{product.discountPrice+'$'}</DiscountPrice> : <></> }
                        {
                            !product.count ? <ZeroCountMessage>Out of stock</ZeroCountMessage> : <></>
                        }
                    </PriseWrapper>

                    <CardAboutSection title={'About Product'} text={product.description}>
                        <SofaIcon width="64" height="64" />
                    </CardAboutSection>

                    <CardAboutSection title={'Dimensions'} params={product.params}>
                        <DimIcon width="64" height="64" />
                    </CardAboutSection>

                    <CardAboutSection title={'About Delivery'} text={product.delivery} >
                        <TruckIcon width="64" height="64" />
                    </CardAboutSection>

                </InfoWrapper>
            </Wrapper>
        </>
    );
}

export default CardAbout;