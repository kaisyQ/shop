import React from 'react';
import { UploadedImageWrapper } from './UploadedImageElements';

interface IUploadedImageProps {
    src: string,
    name: string
}

const UploadedImage: React.FC<IUploadedImageProps> = (props) => {
    return (
        <>
            <UploadedImageWrapper>

                <img src={props.src} alt={props.name} />

            </UploadedImageWrapper> 
        </>
    )
}

export default React.memo(UploadedImage);