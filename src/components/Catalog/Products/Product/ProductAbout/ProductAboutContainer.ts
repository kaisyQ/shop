import ProductAbout from "./ProductAbout";

import { ConnectedProps, connect } from "react-redux";

import { RootState } from "redux/store";

import { getCurrentProduct } from "../../../../../redux/reducers/product/selector";

import { fetchProductById } from "redux/reducers/product/productSlice";

import { addToCart } from "redux/reducers/cart/cartSlice";

const mapStateToProps = (state: RootState) => ({
    product: getCurrentProduct(state)
});

const mapDispatchToProps = {
    fetchProductById, addToCart
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ProductAboutConnectedProps = ConnectedProps<typeof connector>;

export default connector(ProductAbout);