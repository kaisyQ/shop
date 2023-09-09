import React from "react";

import Button from "components/Custom/Button/Button";

import Images from "./Images/Images";

import Inputs from "./Inputs/Inputs";

import { ProductEditWrapper, EditForm, BlockWrapper, BtnWrapper } from "./ProductEditStyles";

import { IProductEditConnectedProps } from "./ProductEditContainer";

import { useNavigate, useParams } from "react-router-dom";

import reducer, { initialState, actions } from "reducers/product-edit/reducer";

import { updateCheck, createCheck } from "helpers/product-edit.boolean-expressions";

import { DELIVERY_TEXT } from "constants/constants";

interface IProductEditProps extends IProductEditConnectedProps {

}

const ProductEdit: React.FC<IProductEditProps> = (props) => {

    const { 
        fetchToCreateProduct, setConfirmModalData, setCurrent, 
        fetchProductById, product, fetchToUpdateProduct
    } = props;

    const navigate = useNavigate();

    const { id } = useParams();

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        if (!id) {
            setCurrent(null);
            return;
        }
        fetchProductById(id);

    }, [id, fetchProductById, setCurrent])

    React.useEffect(() => {
        if (!product){
            setCurrent(null);
            dispatch(actions.setAboutDelivery(DELIVERY_TEXT));
            return;
        }
        dispatch(actions.setName(product.name));
        dispatch(actions.setAboutDelivery(product.delivery));
        dispatch(actions.setAboutProduct(product.description));
        dispatch(actions.setCount(product.count.toString()));
        dispatch(actions.setDiscountPrice(product.discountPrice ? product.discountPrice.toString() : ""));
        dispatch(actions.setPrice(product.price.toString()));
        dispatch(actions.setWidth(product.params.Width));
        dispatch(actions.setHeight(product.params.Height));
        dispatch(actions.setDepth(product.params.Depth));
        dispatch(actions.setTopOfTheWeek(product.topOfTheWeek));
    }, [product])


    const onSubmitClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        
        if (!product || !id) {
            if (createCheck(state) && state.imagesFiles) {
                const formData = new FormData();
                
                state.imagesFiles.map(file => formData.append("productImages", file));
                
                const bodyData = JSON.stringify({
                    name: state.name,
                    about_delivery: state.aboutDelivery,
                    about_product: state.aboutProduct,
                    width: state.width,
                    height: state.height,
                    depth: state.depth,
                    price: parseInt(state.price),
                    discount_price: parseInt(state.discountPrice),
                    bestseller: state.topOfTheWeek,
                    count: parseInt(state.count)
                });
                
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
        } else {
            if (updateCheck(state, product)) {
                const formData = new FormData();
                
                const bodyData = JSON.stringify({
                    id: product.id,
                    name: state.name,
                    about_delivery: state.aboutDelivery,
                    about_product: state.aboutProduct,
                    width: state.width,
                    height: state.height,
                    depth: state.depth,
                    price: parseInt(state.price),
                    discount_price: parseInt(state.discountPrice),
                    bestseller: state.topOfTheWeek,
                    count: parseInt(state.count)
                });

                formData.append("data", bodyData);

                setConfirmModalData({
                    callback: () => {
                        fetchToUpdateProduct(formData);
                        navigate("/admin");
                    },
                    isVisible: true,
                    message: "Confirm updating product..."
                });
            }
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
                        {
                            !id || !product ? <>
                                <Images dispatch={dispatch} imagesSrc={state.imagesSrc} />
                            </> : null
                        }
                            <BtnWrapper>
                                <Button onClick={onSubmitClick} isReverse={true}>
                                    { !id || !product ? "Save" : "Update" }
                                </Button>
                            </BtnWrapper>
                        </BlockWrapper>
                </EditForm>
            </ProductEditWrapper>
        </>
    );
}


export default ProductEdit;