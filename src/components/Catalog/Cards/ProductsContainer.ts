import Products from "./Products";

import { ConnectedProps, connect } from "react-redux";

import { getProductItems as getItems } from "../../../redux/reducers/product/selector";

import type { RootState } from "redux/store";

import { fetchProducts } from "redux/reducers/product/productSlice";

const mapStateToProps = (state: RootState) => ({
    items: getItems(state)
});

const mapDispatchToProps = {
    fetchProducts
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type CardsConnectedPropsType = ConnectedProps<typeof connector>

export default connector(Products);