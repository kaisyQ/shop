import React from "react";

import { ImagesWrapper, ImageRow, ImageWrapper } from "./ImagesStyles"

import { Image } from "components/Custom/Image/Image";
interface CardAboutImages {
    images: string[]
}

const CardAboutImages: React.FC<CardAboutImages> = ({ images }) => {
    return (
        <>
            <ImagesWrapper>
                {

                    (() => {
                        const result: React.JSX.Element[] = [];
                        for(let i=0; i<images.length; ++i) {
                            if (i % 3 === 0)  {
                                result.push(<>
                                    <ImageRow>
                                        <ImageWrapper width={'100%'}>
                                            <Image src={images[i]}/>
                                        </ImageWrapper>
                                    </ImageRow>
                                </>)
                                continue;
                            }
                            if (i + 1 < images.length) {
                                result.push(<>
                                    <ImageRow>
                                        <ImageWrapper>
                                            <Image src={images[i]} />
                                        </ImageWrapper>
                                        <ImageWrapper>
                                            <Image src={images[i+1]} />
                                        </ImageWrapper>
                                    </ImageRow>
                                </>)
                                i++;
                                continue;
                            }
                            result.push(<>
                                <ImageRow>
                                    <ImageWrapper width="100%">
                                        <Image src={images[i]}/>
                                    </ImageWrapper>
                                </ImageRow>
                            </>)
                        }
                        return result;
                    })()
                }
            </ImagesWrapper>
        </>
    );
}

export default CardAboutImages;