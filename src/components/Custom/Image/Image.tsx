import React from "react";
import { ImageWrapper } from "./ImageStyles";
import { ResizedImage } from "./ResizedImage/ResizedImage";

interface IImageProps {
    src: string
}

export const Image: React.FC<IImageProps> = ({ src }) => {

    const [isResizedImg, setResizedImg] = React.useState(false);

    return (
        <>
            <ImageWrapper src={src} alt="product-image" onClick={(ev) => setResizedImg(true)} />

            <ResizedImage active={isResizedImg} setActive={setResizedImg} src={src} />
        </>
    )
}