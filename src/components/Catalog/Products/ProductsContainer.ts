import Products from "./Products";

import { ConnectedProps, connect } from "react-redux";

import { getProductItems as getProducts, getProductsLoading } from "../../../store/reducers/product/ProductSelector";

import type { RootState } from "store/store";

import { fetchProducts } from "store/reducers/product/ProductSlice";

const mapStateToProps = (state: RootState) => ({
    products: getProducts(state),
    loading: getProductsLoading(state)
});

const mapDispatchToProps = {
    fetchProducts
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type CardsConnectedPropsType = ConnectedProps<typeof connector>

export default connector(Products);