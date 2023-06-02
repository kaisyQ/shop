import React from "react";

import Button from "components/Custom/Button/Button";
import Input from "components/Custom/Input/Input";

import { ProductEditWrapper, FormControl, InputWrapper, EditForm, InputsWrapper } from "./ProductEditStyles";

import { IProductEditConnectedProps } from "./ProductEditContainer";
import { useParams } from "react-router-dom";

interface IProductEditProps extends IProductEditConnectedProps {

}

const ProductEdit: React.FC<IProductEditProps> = ({ product, addProduct, updateProduct }) => {

    const { id } = useParams();
    
    const [name, setName] = React.useState('');
    const [aboutProduct, setAboutProduct] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [discount, setDiscount] = React.useState('');
    const [width, setWidth] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [depth, setDepth] = React.useState('');
    const [aboutDelivery, setAboutDelivery] = React.useState('');
    const [images, setImages] = React.useState<string[] | null>(null);


    React.useEffect(() => {

    }, [id])

    React.useEffect(() => {
        if (!product) {
            return;
        }
        setName(product.name);
        setAboutProduct(product.description);
        setPrice(product.price.toString());
        setWidth(product.params.Width);
        setHeight(product.params.Height);
        setDepth(product.params.Depth);
        setAboutDelivery(product.delivery);
        setImages([...product.imagesSrc]);
    }, [product])


    const onEditFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {

    }

    const onNameChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(ev.target.value);
    }
    
    const onAboutProductChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAboutProduct(ev.target.value);
    }

    const onPriceChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPrice(ev.target.value);
    }

    const onDiscountChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDiscount(ev.target.value);
    }

    const onWidthChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setWidth(ev.target.value);
    }

    const onHeightChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHeight(ev.target.value);
    }
    
    const onDepthChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDepth(ev.target.value);
    }


    const onDeliveryAboutChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAboutDelivery(ev.target.value);
    }

    return (
        <>
            <ProductEditWrapper>
                <EditForm onSubmit={onEditFormSubmit}>
                    <InputWrapper>
                        <Input 
                            placeholder="Name" 
                            id="product-edit-title" 
                            type="input" 
                            onChange={onNameChange}
                            value={name}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input 
                            placeholder="About product" 
                            id="user-edit-about" 
                            type="textarea" 
                            onChange={onAboutProductChange}
                            value={aboutProduct}
                        />
                    </InputWrapper>

                    <InputsWrapper>
                        <InputWrapper>
                            <Input 
                                placeholder="Price value" 
                                id="product-edit-price" 
                                type="input" 
                                onChange={onPriceChange}
                                value={price}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <Input 
                                placeholder="Discount(%)" 
                                id="product-edit-discount" 
                                type="input" 
                                onChange={onDiscountChange}
                                value={discount}
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
                                value={width}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input 
                                placeholder="Height" 
                                id="product-edit-Height" 
                                type="input" 
                                onChange={onHeightChange}
                                value={height}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input 
                                placeholder="Depth" 
                                id="product-edit-Depth" 
                                type="input" 
                                onChange={onDepthChange}
                                value={depth}
                            />
                        </InputWrapper>
                    </InputsWrapper>
                    <InputWrapper>
                        <Input 
                            placeholder="About delivery" 
                            id="user-edit-about-delivery" 
                            type="textarea" 
                            onChange={onDeliveryAboutChange}
                            value={aboutDelivery}
                        />
                    </InputWrapper>
                    {
                        images ? <div>
                            {
                                images.map((src, mainIndex) => <>
                                        <img  src={src} alt="" />
                                        <label key={mainIndex}>
                                            <input
                                                type="file" 
                                                accept="image.png, image.jpg"
                                                style={{display: 'block'}}
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
                                    </>
                                )
                            }
                        </div> : null
                    }
                    <FormControl>
                        <Button>Save</Button>
                    </FormControl>
                </EditForm>
            </ProductEditWrapper>
        </>
    );
}


export default ProductEdit;