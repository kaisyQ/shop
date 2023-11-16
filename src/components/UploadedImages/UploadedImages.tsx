import React from 'react';
import { UploadedImagesWrapper } from './UploadedImagesElements';
import UploadedImage from './UplodedImage/UploadedImage';


interface UploadedImagesProps {
    files: FileList | null
}

const UploadedImages: React.FC<UploadedImagesProps> = (props) => {


    if (!props.files) return null;

    return (
        <>

            <UploadedImagesWrapper>

                {
                    Array.from(props.files).map((file, index) => <React.Fragment key={index}>
                        
                        <UploadedImage src={URL.createObjectURL(file)} name={file.name}/>

                    </React.Fragment>)
                }

            </UploadedImagesWrapper>

        </>
    );
}

export default UploadedImages;