import React from "react";

import Button from "components/Custom/Button/Button";
import Input from "components/Custom/Input/Input";

import { 
    ProductEditWrapper, InputWrapper, EditForm, InputsWrapper, BlockWrapper,
    ImagesWrapper, Image, ImageBlock, BtnWrapper
 } from "./ProductEditStyles";

import { IProductEditConnectedProps } from "./ProductEditContainer";
import { useParams } from "react-router-dom";

import reducer, { initialState, actions } from "reducers/product-edit/reducer";

interface IProductEditProps extends IProductEditConnectedProps {

}

const ProductEdit: React.FC<IProductEditProps> = ({ product, addProduct, updateProduct }) => {

    const { id } = useParams();

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {

    }, [id])

    React.useEffect(() => {
        if (!product) {
            return;
        }
        dispatch(actions.setName(product.name));
        dispatch(actions.setAboutProduct(product.description));
        dispatch(actions.setPrice(product.price.toString()));
        dispatch(actions.setWidth(product.params.Width));
        dispatch(actions.setHeight(product.params.Height));
        dispatch(actions.setDepth(product.params.Depth));
        dispatch(actions.setAboutDelivery(product.delivery));
        dispatch(actions.setImagesSrc(product.imagesSrc));
    }, [product])


    const onEditFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {

    }

    const onNameChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setName(ev.target.value));
    }
    
    const onAboutProductChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setAboutProduct(ev.target.value));
    }

    const onPriceChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setPrice(ev.target.value));
    }

    const onDiscountChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setDiscountPrice(ev.target.value));
    }

    const onWidthChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setWidth(ev.target.value));
    }

    const onHeightChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setHeight(ev.target.value));
    }
    
    const onDepthChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setDepth(ev.target.value));
    }


    const onDeliveryAboutChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setAboutDelivery(ev.target.value));
    }

    return (
        <>
            <ProductEditWrapper>
                <EditForm onSubmit={onEditFormSubmit}>
                    <BlockWrapper>
                    <InputWrapper>
                        <Input 
                            placeholder="Name" 
                            id="product-edit-title" 
                            type="input" 
                            onChange={onNameChange}
                            value={state.name}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input 
                            placeholder="About product" 
                            id="user-edit-about" 
                            type="textarea" 
                            minHeight="30rem"
                            onChange={onAboutProductChange}
                            value={state.aboutProduct}
                        />
                    </InputWrapper>

                    <InputsWrapper>
                        <InputWrapper>
                            <Input 
                                placeholder="Price value" 
                                id="product-edit-price" 
                                type="input" 
                                onChange={onPriceChange}
                                value={state.price}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <Input 
                                placeholder="Discount(%)" 
                                id="product-edit-discount" 
                                type="input" 
                                onChange={onDiscountChange}
                                value={state.discountPrice}
                            />
                        </InputWrapper>
                    </InputsWrapper>
                    
                    <InputsWrapper>
                        <InputWrapper>
                            <Input 
                                placeholder="Width" 
                                id="product-edit-Width" 
                                type="input" 
                                onChange={onWidthChange}
                                value={state.width}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input 
                                placeholder="Height" 
                                id="product-edit-Height" 
                                type="input" 
                                onChange={onHeightChange}
                                value={state.height}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input 
                                placeholder="Depth" 
                                id="product-edit-Depth" 
                                type="input" 
                                onChange={onDepthChange}
                                value={state.depth}
                            />
                        </InputWrapper>
                    </InputsWrapper>
                    <InputWrapper>
                        <Input 
                            placeholder="About delivery" 
                            id="user-edit-about-delivery" 
                            type="textarea"
                            minHeight="30rem"
                            onChange={onDeliveryAboutChange}
                            value={state.aboutDelivery}
                        />
                    </InputWrapper>
                    </BlockWrapper>
                    <BlockWrapper>
                    {
                        /*state.images ? <ImagesWrapper>
                            {
                                images.map((src, mainIndex) => <ImageBlock>
                                        <Image  src={src} alt="" />
                                        <label key={mainIndex}>
                                            <span>Choose image</span>
                                            <input
                                                type="file" 
                                                accept="image.png, image.jpg"
                                                style={{display: 'none'}}
                                                onChange={(ev) => {
                                                    if (!ev.target.files) {
                                                        return;
                                                    }
                                                    const url = URL.createObjectURL(ev.target.files[0]);

                                                    setImages(images.map((image, i) => {
                                                        if (i===mainIndex){
                                                            return url;
                                                        }
                                                        return image;
                                                    }))
                                                }}
                                            />
                                        </label>
                                    </ImageBlock>
                                )
                            }
                        </ImagesWrapper> : null*/
                    }
                    <BtnWrapper>
                        <Button isReverse={true}>Save</Button>
                    </BtnWrapper>
                    </BlockWrapper>
                </EditForm>
            </ProductEditWrapper>
        </>
    );
}


export default ProductEdit;