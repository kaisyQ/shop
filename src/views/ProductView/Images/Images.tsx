import React from "react";

import { ImagesWrapper, ImageRow } from "./ImagesStyles"

import Slider from "components/Slider/Slider";
import { Image } from "@nextui-org/react";

interface CardAboutImages {
    images: string[]
}

const ProductAboutImages: React.FC<CardAboutImages> = ({ images }) => {
    return (
        <>
            <ImagesWrapper>
                {

                    (() => {
                        const result: React.JSX.Element[] = [];
                        
                        const length = images.length >= 6 ? 4 : images.length;
                        
                        for(let i = 0; i < length; ++i) {
                            if (i % 3 === 0)  {
                                result.push(
                                    <ImageRow key={i}>
                                        <Image isZoomed src={images[i]}/>
                                    </ImageRow>
                                )
                                continue;
                            }
                            if (i + 1 < images.length) {
                                result.push(
                                    <ImageRow key={i}>
                                    
                                        <Image isZoomed src={images[i]} />
                                    
                                        <Image isZoomed src={images[i + 1]} />
                                    
                                    </ImageRow>
                                )
                                i++;
                                continue;
                            }
                            result.push(
                                <ImageRow key={i}>
                                    <Image isZoomed src={images[i]} />
                                </ImageRow>
                            );
                        }
                        return result;
                    })()
                }
                {
                    images.length >= 6 ? <>
                    
                        <Slider slidesCount={images.length - 4 < 3 ? 1 : 2}>
                    
                            {
                                images.slice(4).map((image, index) => <div key={index}>
                                    <Image isZoomed src={image} alt="" 
                                    />
                                </div>)
                            }
                    
                        </Slider>
                    
                    </> : null
                }
            </ImagesWrapper>
        </>
    );
}

export default ProductAboutImages;