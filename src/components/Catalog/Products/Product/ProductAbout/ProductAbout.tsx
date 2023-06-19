import React from "react";

import Slider from "components/Slider/Slider";

import Images from "./Images/Images";
import Sections from "./Sections/Sections";
import Path from "components/Custom/Path/Path";
import Component404 from "components/Error/404";

import { useParams } from "react-router-dom";

import { CardAboutConnectedProps } from "./ProductAboutContainer";

import { 
    Wrapper, SliderWrapper, InfoWrapper, Title, PriseWrapper,
    Prise, DiscountPrice, ZeroCountMessage, InfoHeader
} from "./ProductAboutStyles"

import useFetchById from "hooks/useFetchById";

const CardAbout: React.FC<CardAboutConnectedProps> = ({ product, fetchProductById }) => {

    useFetchById(fetchProductById);

    if (!product) {
        return (
            <>
                <Component404 />
            </>
        );
    }

    return (
        <>
            <Path 
                subPath={{
                    name: product.name,
                    url: `/catalog/${product.id}`
                }}
                mainPath={{
                    name: "Catalog",
                    url: '/catalog'
                }}
            />
            <Wrapper>
                
                <SliderWrapper>
                    <Slider images={product.imagesSrc}/>
                </SliderWrapper>


                <Images images={product.imagesSrc}/>
                
                <InfoWrapper>
                    <InfoHeader>
                        <Title>{ product.name }</Title>

                        <PriseWrapper>
                            <Prise 
                                crossedOut={ 
                                    product.discountPrice ? true : false 
                                }
                            >
                                { product.price + (product.discountPrice ? '' : '(CAD)') }
                            </Prise>
                            {   
                                product.discountPrice ? <>
                                    <DiscountPrice>{product.discountPrice+'(CAD)'}</DiscountPrice> 
                                </>: null 
                            }
                            {
                                !product.count ? <>
                                    <ZeroCountMessage>Out of stock</ZeroCountMessage> 
                                </> : null
                            }
                        </PriseWrapper>
                    </InfoHeader>

                    <Sections 
                        delivery={product.delivery} 
                        description={product.description}
                        params={product.params}
                    />
                </InfoWrapper>
            </Wrapper>
        </>
    );
}

export default CardAbout;