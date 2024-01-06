import React from 'react';
import { UploadedImagesTitle, UploadedImagesWrapper } from './UploadedImagesElements';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

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
                            <Card>
                            
                                <CardHeader>
                                    Image #{index + 1}
                                </CardHeader>
                                
                                <CardBody>

                                    <Image
                                        width={450}
                                        isZoomed
                                        src={URL.createObjectURL(file)} 
                                        alt={file.name} 
                                    />
                                
                                </CardBody>
                            
                            </Card>
                        </React.Fragment>)
                    }

                </UploadedImagesWrapper>
            
            </div>
        </>
    );
}

export default UploadedImages;