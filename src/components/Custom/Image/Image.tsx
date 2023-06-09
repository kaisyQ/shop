import React from "react";
import { ImageStyle } from "./ImageStyles";
import { ResizedImage } from "./ResizedImage/ResizedImage";

export const Image = (props: any) => {

    const [isResizedImg, setResizedImg] = React.useState(false)

    return (
        <>
            <ImageStyle src={props.src} alt="" onClick={() => setResizedImg(true)}/>

            <ResizedImage active={ isResizedImg } setActive={ setResizedImg } src={props.src}/>

        </>
    )
}