import React from "react";
import Images from "./Images/Images";
import Sections from "./Sections/Sections";
import Path from "components/Path/Path";
import Component404 from "shared/Error/404";
import { ProductViewConnectedProps } from "./ProductViewContainer";
import { 
    Wrapper, InfoWrapper, Title, PriseWrapper,
    Prise, DiscountPrice, ZeroCountMessage, InfoHeader
} from "./ProductViewStyles"
import useWindowWidth from "hooks/useWindowWidth";
import { useParams } from "react-router-dom";
import { LOADING } from "constants/constants";
import Preloader from "shared/Preloader/Preloader";
import { Button } from "@nextui-org/react";
import Slider from "components/Slider/Slider";
import ResizedSlider from "components/ResizedSlider/ResizedSlider";

const ProductView: React.FC<ProductViewConnectedProps> = ({ product, fetchProductBySlug, addToCart, setCurrent, loading }) => {
    const [isSliderShowing, setIsSliderShowing] = React.useState(false);
    const { id } = useParams();

    React.useEffect(() => {
        if (!id) {
            return;
        }
        fetchProductBySlug(id);
        
        return () => {
            setCurrent(null);
        }

    }, [id, fetchProductBySlug, setCurrent]);

    const width = useWindowWidth();
    
    const addToCartBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (product) {
            addToCart(product);
        }
    }

    if (loading === LOADING) {
        return <Preloader />;
    }

    if (!product) {
        return <Component404 />;
    }
    
    return (
        <>

            {
                isSliderShowing ? <>
                    <ResizedSlider
                        isVisible={isSliderShowing}
                        onClose={() => setIsSliderShowing(false)}
                        images={product.imagesSrc}
                    /> 
                </> : null
            }

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
                    
                        <Slider>

                            {
                                product.imagesSrc.map((image, index) => <React.Fragment>
                                
                                    <div key={index}>
                                
                                        <img src={image} alt="" />
                                    
                                    </div>
                                
                                </React.Fragment>)
                            }

                        </Slider>
                    
                    </> : <>
                        
                        <Images 
                            onOpenSlider={() => setIsSliderShowing(true)} 
                            images={product.imagesSrc} 
                        />
                    
                    </>
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
                    
                        <Button className="dark" size="lg" onClick={addToCartBtnClick}>Add to cart</Button>
                     
                    </InfoHeader>

                    <Sections 
                        delivery={product.delivery} 
                        description={product.description}
                        params={{Width: product.width, Height: product.height, Depth: product.depth}}
                    />
                </InfoWrapper>
            </Wrapper>
        </>
    );
}

export default React.memo(ProductView);