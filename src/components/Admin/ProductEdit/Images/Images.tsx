import React from "react";

import { actions } from "reducers/product-edit/reducer";
import type { ProductsDispatchType } from "reducers/product-edit/reducer";

import { ImagesWrapper, ImageBlock, LabelSpan, Image } from "./ImagesStyles";

interface IImagesProps {
    dispatch: ProductsDispatchType, 
    imagesSrc: string[] | null;
}

const Images: React.FC<IImagesProps> = ({ dispatch, imagesSrc }) => {
    
    const onUpdateFileInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => (mainIndex: number) => {
        if (!ev.target.files) {
            return;
        }
        const url = URL.createObjectURL(ev.target.files[0]);
        if(!imagesSrc) {
            return;
        }
        dispatch(actions.setImagesSrc(imagesSrc.map((image, i) => {
            if (i === mainIndex){
                return url;
            }
            return image;
        })))
        const filesArr: File[] = [];
        for(let i=0; i<ev.target.files.length; ++i) {
            filesArr.push(ev.target.files[i]);
        }
        dispatch(actions.setImagesFiles(filesArr));
    }
    
    const onCreateFilesInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (!ev.target.files) {
            return;
        }
        const filesArr: File[] = [];
        const imgSrcArr: string[] = [];
        for(let i=0; i<ev.target.files.length; ++i) {
            filesArr.push(ev.target.files[i]);
            imgSrcArr.push(URL.createObjectURL(ev.target.files[i]));
        }
        dispatch(actions.setImagesFiles(filesArr));
        dispatch(actions.setImagesSrc(imgSrcArr));
    }

    const onAddFileInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (!ev.target.files) {
            return;
        }
        if (!imagesSrc) {
            return;
        }

        const filesArr: File[] = [];
        const imgSrcArr: string[] = [];
        for(let i=0; i<6-imagesSrc.length; ++i) {
            if (!ev.target.files[i]) {
                break;
            }
            filesArr.push(ev.target.files[i]);
            imgSrcArr.push(URL.createObjectURL(ev.target.files[i]));
        }
        dispatch(actions.addImagesWithFile({ files: filesArr, images: imgSrcArr }));
    }

    return (
        <>
            <ImagesWrapper>
            {
                imagesSrc ? imagesSrc.map((src, mainIndex) => <ImageBlock>
                        <Image  src={src} alt="" />
                        <label key={mainIndex}>
                            <LabelSpan>Choose image</LabelSpan>
                            <input
                                type="file" 
                                accept="image.png, image.jpg, image.jpeg"
                                style={{display: 'none'}}
                                onChange={(ev) => onUpdateFileInputChange(ev)(mainIndex)}
                            />
                        </label>
                    </ImageBlock>
                ) : <>
                    <label>
                        <LabelSpan>Choose images</LabelSpan>
                        <input
                            type="file"
                            multiple
                            accept="image.png, image.jpg, image.jpeg"
                            style={{display: 'none'}}
                            onChange={onCreateFilesInputChange}
                        />
                    </label>
                </>
            }
            </ImagesWrapper>
            {
                !imagesSrc || imagesSrc?.length < 6 ? <div>
                    <label>
                        <LabelSpan>Add image</LabelSpan>
                        <input
                            type="file"
                            multiple
                            accept="image.png, image.jpg, image.jpeg"
                            style={{display: 'none'}}
                            onChange={onAddFileInputChange}
                        />
                    </label>
                </div> : null
            }
        </>
    );
}

export default Images;