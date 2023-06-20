import Products from "./Products";

import { ConnectedProps, connect } from "react-redux";

import { getProductItems as getProducts, getProductsLoading } from "../../../redux/reducers/product/selector";

import type { RootState } from "redux/store";

import { fetchProducts } from "redux/reducers/product/productSlice";

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