import type { InitialStateType } from "./../reducers/product-edit/reducer";
import type { IProduct } from "types/types";


export const updateCheck = (state: InitialStateType, product: IProduct) : boolean => {
    return (
        state.name !== product.name || 
        state.aboutDelivery !== product.delivery || 
        state.aboutProduct !== product.description ||
        state.width !== product.params.Width || 
        parseInt(state.price) !== product.price || 
        parseInt(state.discountPrice) !== product.discountPrice ||
        state.height !== product.params.Height || 
        state.depth !== product.params.Depth || 
        parseInt(state.count) !== product.count ||
        state.topOfTheWeek !== product.topOfTheWeek
    );
}


export const createCheck = (state: InitialStateType) => {
    return (
        state.imagesFiles && state.name && state.aboutDelivery &&
        state.aboutProduct && state.width && state.price && 
        state.height && state.depth 
    );
}