import React from "react";

import { ImagesWrapper, ImageRow, ImageWrapper } from "./ImagesStyles"

import { Image } from "components/Custom/Image/Image";

import { API_URL } from "constants/constants";

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
                        for(let i=0; i<images.length; ++i) {
                            if (i % 3 === 0)  {
                                result.push(
                                    <ImageRow key={i}>
                                        <ImageWrapper width={'100%'}>
                                            <Image src={`${API_URL}${images[i]}`}/>
                                        </ImageWrapper>
                                    </ImageRow>
                                )
                                continue;
                            }
                            if (i + 1 < images.length) {
                                result.push(
                                    <ImageRow key={i}>
                                        <ImageWrapper>
                                            <Image src={`${API_URL}${images[i]}`} />
                                        </ImageWrapper>
                                        <ImageWrapper>
                                            <Image src={`${API_URL}${images[i + 1]}`} />
                                        </ImageWrapper>
                                    </ImageRow>
                                )
                                i++;
                                continue;
                            }
                            result.push(
                                <ImageRow key={i}>
                                    <ImageWrapper width="100%">
                                        <Image src={`${API_URL}${images[i]}`}/>
                                    </ImageWrapper>
                                </ImageRow>
                            )
                        }
                        return result;
                    })()
                }
            </ImagesWrapper>
        </>
    );
}

export default ProductAboutImages;