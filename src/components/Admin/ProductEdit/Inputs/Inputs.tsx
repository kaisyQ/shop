import React from "react";
import Input from "components/Custom/Input/Input";

import { actions } from "reducers/product-edit/reducer";
import type { ProductsDispatchType } from "reducers/product-edit/reducer";

import { InputsWrapper, InputWrapper } from "./InputStyles";


interface IInputsProps {
    dispatch: ProductsDispatchType,
    state: { 
        name: string,
        aboutProduct: string,
        aboutDelivery: string,
        price: string,
        discountPrice: string,
        width: string,
        height: string,
        depth: string
    }
}

const Inputs: React.FC<IInputsProps> = ({ dispatch, state }) => {
    return (
        <>
            <InputWrapper>
                <Input placeholder="Name" id="product-edit-title" type="input" 
                    onChange={(ev) => dispatch(actions.setName(ev.target.value))} value={state.name}
                />
            </InputWrapper>

            <InputWrapper>
                <Input placeholder="About" id="user-edit-about" type="textarea" 
                    minHeight="30rem" value={state.aboutProduct}
                    onChange={(ev) => dispatch(actions.setAboutProduct(ev.target.value))}
                />
            </InputWrapper>

            <InputsWrapper>
                <InputWrapper>
                    <Input placeholder="Price(CAD)" id="product-edit-price" type="input" 
                        onChange={(ev) => dispatch(actions.setPrice(ev.target.value))} 
                        value={state.price}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Input placeholder="Discount price(CAD)" id="product-edit-discount" 
                        type="input" value={state.discountPrice}
                        onChange={(ev) => dispatch(actions.setDiscountPrice(ev.target.value))} 
                    />
                </InputWrapper>
            </InputsWrapper>
        
            <InputsWrapper>
                <InputWrapper>
                    <Input placeholder="Width(cm)" id="product-edit-Width" type="input" 
                        onChange={(ev) => dispatch(actions.setWidth(ev.target.value))}  
                        value={state.width}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input placeholder="Height(cm)" id="product-edit-Height" type="input" 
                        onChange={(ev) => dispatch(actions.setHeight(ev.target.value))}  
                        value={state.height}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input placeholder="Depth(cm)" id="product-edit-Depth" type="input" 
                        onChange={(ev) => dispatch(actions.setDepth(ev.target.value))} 
                        value={state.depth}
                    />
                </InputWrapper>
            </InputsWrapper>
            <InputWrapper>
                <Input placeholder="Delivery" id="user-edit-about-delivery" type="textarea"
                    minHeight="30rem" value={state.aboutDelivery}
                    onChange={(ev) => dispatch(actions.setAboutDelivery(ev.target.value))} 
                />
            </InputWrapper>
        </>
    );
}

export default Inputs;