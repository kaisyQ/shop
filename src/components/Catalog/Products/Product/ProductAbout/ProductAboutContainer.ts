import ProductAbout from "./ProductAbout";

import { ConnectedProps, connect } from "react-redux";

import { RootState } from "redux/store";

import { getCurrentProduct } from "../../../../../redux/reducers/product/selector";

import { fetchProductBySlug } from "redux/reducers/product/productSlice";

import { addToCart } from "redux/reducers/cart/cartSlice";

import { setCurrent } from "redux/reducers/product/productSlice";

const mapStateToProps = (state: RootState) => ({
    product: getCurrentProduct(state)
});

const mapDispatchToProps = {
    fetchProductBySlug, addToCart, setCurrent
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ProductAboutConnectedProps = ConnectedProps<typeof connector>;

export default connector(ProductAbout);