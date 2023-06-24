import React from "react";

import Button from "components/Custom/Button/Button";
import Images from "./Images/Images";
import Inputs from "./Inputs/Inputs";

import { ProductEditWrapper, EditForm, BlockWrapper, BtnWrapper } from "./ProductEditStyles";

import { IProductEditConnectedProps } from "./ProductEditContainer";
import { useNavigate, useParams } from "react-router-dom";

import reducer, { initialState, actions } from "reducers/product-edit/reducer";


interface IProductEditProps extends IProductEditConnectedProps {

}

const ProductEdit: React.FC<IProductEditProps> = (props) => {

    const { fetchToCreateProduct, setConfirmModalData } = props;

    const navigate = useNavigate();

    const [state, dispatch] = React.useReducer(reducer, initialState);


    const onCreateClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        const formData = new FormData();
        if (
            state.imagesFiles&&state.name&&state.aboutDelivery&&
            state.aboutProduct&&state.width&&state.price&&state.discountPrice&&
            state.height&&state.depth
        ) {
            state.imagesFiles.map(file => formData.append("productImages", file));
            const bodyData = JSON.stringify({
                name: state.name,
                aboutDelivery: state.aboutDelivery,
                aboutProduct: state.aboutProduct,
                width: state.width,
                height: state.height,
                depth: state.depth,
                price: parseInt(state.price),
                discountPrice: parseInt(state.discountPrice)
            })
            formData.append("data", bodyData);
            
            setConfirmModalData({
                callback: () => {
                    fetchToCreateProduct(formData);
                    navigate("/admin");
                },
                isVisible: true,
                message: "Confirm creating product..."
            });
        }
           
    }

    const { imagesSrc, imagesFiles, ...inputState } = state;
    
    return (
        <>
            <ProductEditWrapper>
                <EditForm onSubmit={(ev) => ev.preventDefault()}>
                    <BlockWrapper>
                        <Inputs dispatch={dispatch} state={inputState} />
                    </BlockWrapper>
                    <BlockWrapper>
                        <Images dispatch={dispatch} imagesSrc={state.imagesSrc} />
                    <BtnWrapper>
                        
                        <Button onClick={onCreateClick} isReverse={true}>Save</Button>
                    </BtnWrapper>
                    </BlockWrapper>
                </EditForm>
            </ProductEditWrapper>
        </>
    );
}


export default ProductEdit;