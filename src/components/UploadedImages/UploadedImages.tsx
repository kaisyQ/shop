import React from 'react';
import { UploadedImagesTitle, UploadedImagesWrapper } from './UploadedImagesElements';
import UploadedImage from './UplodedImage/UploadedImage';


interface UploadedImagesProps {
    files: FileList | null
}

const UploadedImages: React.FC<UploadedImagesProps> = (props) => {


    if (!props.files) return null;

    return (
        <>
            <div>
                
                <UploadedImagesTitle>Pictures that will be sent</UploadedImagesTitle>
                
                <UploadedImagesWrapper>

                    {
                        Array.from(props.files).map((file, index) => <React.Fragment key={index}>
                            
                            <UploadedImage src={URL.createObjectURL(file)} name={file.name}/>

                        </React.Fragment>)
                    }

                </UploadedImagesWrapper>
            
            </div>
        </>
    );
}

export default UploadedImages;