import React from "react";
import { Image } from "@nextui-org/react";
import ResizeImage from '../../images/resize.png';
import styled from "styled-components";


const Wrapper = styled.div`
    position: relative;
`;

const ResizeIcon = styled.img`
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    z-index: 201;
    cursor: pointer;

`;

interface IImageWithResizeProps {
    toggleRisize: () => void
    src: string,
}

const ImageWithResize: React.FC<IImageWithResizeProps> = (props) => {
    return (
        <Wrapper>
            <ResizeIcon src={ResizeImage} alt="resize" onClick={() => props.toggleRisize()}/>
            <Image
                isZoomed src={props.src}
            />
        </Wrapper>
    );
}

export default React.memo(ImageWithResize);
