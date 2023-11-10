import ProductView from "./ProductView";

import { ConnectedProps, connect } from "react-redux";

import { RootState } from "store/store";

import { getCurrentProduct } from "store/reducers/product/ProductSelector";

import { fetchProductBySlug } from "store/reducers/product/ProductSlice";

import { addToCart } from "store/reducers/cart/CartSlice";

import { setCurrent } from "store/reducers/product/ProductSlice";

const mapStateToProps = (state: RootState) => ({
    product: getCurrentProduct(state)
});

const mapDispatchToProps = {
    fetchProductBySlug, addToCart, setCurrent
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ProductViewConnectedProps = ConnectedProps<typeof connector>;

export default connector(ProductView);