import React from "react";

import Slider from "./Slider/Slider";
import Button from "components/Custom/Button/Button";

import Images from "./Images/Images";
import Sections from "./Sections/Sections";
import Path from "components/Custom/Path/Path";
import Component404 from "components/Ui/Error/404";

import { ProductViewConnectedProps } from "./ProductViewContainer";

import { 
    Wrapper, SliderWrapper, InfoWrapper, Title, PriseWrapper,
    Prise, DiscountPrice, ZeroCountMessage, InfoHeader
} from "./ProductViewStyles"

import useWindowWidth from "hooks/useWindowWidth";

import { useParams } from "react-router-dom";

interface ProductViewProps extends ProductViewConnectedProps {
}

const ProductView: React.FC<ProductViewConnectedProps> = ({ product, fetchProductBySlug, addToCart, setCurrent }) => {

    const { id } = useParams();

    React.useEffect(() => {
        if (!id) {
            return;
        }
        fetchProductBySlug(id);
        
        return () => {
            setCurrent(null);
        }

    }, [id, fetchProductBySlug]);


    const width = useWindowWidth();

    
    const addToCartBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (product) {
            addToCart(product);
        }
    }


    if (!product) {
        return <Component404 />;
    }

    return (
        <>
            <Path 
                subPath={{
                    name: product.name,
                    url: `/catalog/${product.slug}`
                }}
                mainPath={{
                    name: "Catalog",
                    url: '/catalog'
                }}
            />
            <Wrapper>
                {
                    width <= 768? <>
                        <SliderWrapper>
                            <Slider images={product.imagesSrc} />
                        </SliderWrapper>
                    </> : <Images images={product.imagesSrc} />
                }
                
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
                    
                            <Button isReverse={true} onClick={addToCartBtnClick}>Add to cart</Button>
                    
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

export default React.memo(ProductView);