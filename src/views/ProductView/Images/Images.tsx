import React from "react";
import { ImagesWrapper, ImageRow } from "./ImagesStyles"
import Slider from "components/Slider/Slider";
import ImageWithResize from "shared/Image/Image";


interface CardAboutImages {
    images: string[],
    onOpenSlider: () => void,
}

const ProductAboutImages: React.FC<CardAboutImages> = ({ images, onOpenSlider }) => {

    const memoToggleResize = React.useCallback(onOpenSlider, []);

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
                                        <ImageWithResize 
                                            toggleRisize={memoToggleResize} 
                                            src={images[i]}
                                        />
                                    </ImageRow>
                                )
                                continue;
                            }
                            if (i + 1 < images.length) {
                                result.push(
                                    <ImageRow key={i}>
                                    
                                        <ImageWithResize 
                                            toggleRisize={memoToggleResize} 
                                            src={images[i]}
                                        />
                                    
                                        <ImageWithResize
                                            toggleRisize={memoToggleResize} 
                                            src={images[i + 1]}
                                        />
                                    
                                    </ImageRow>
                                )
                                i++;
                                continue;
                            }
                            result.push(
                                <ImageRow key={i}>
                                    <ImageWithResize
                                        toggleRisize={memoToggleResize}
                                        src={images[i]} 
                                    />
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
                                     <ImageWithResize
                                        toggleRisize={memoToggleResize}
                                        src={image}
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

export default React.memo(ProductAboutImages);