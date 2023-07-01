import TopProducts from "./TopProducts";

import { ConnectedProps, connect } from "react-redux";

import { getTopProducts } from "redux/reducers/product/selector";

import { fetchTopProducts } from "redux/reducers/product/productSlice";

import type { RootState } from "redux/store";


const mapStateToProps = (state: RootState) => ({
    topProducts: getTopProducts(state)
});


const mapDispatchToProps = {
    fetchTopProducts
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TopProductsConnectedProps = ConnectedProps<typeof connector>;

export default connector(TopProducts);
