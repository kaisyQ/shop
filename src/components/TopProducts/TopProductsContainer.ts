import TopProducts from "./TopProducts";

import { ConnectedProps, connect } from "react-redux";

import { getTopProducts } from "store/reducers/product/ProductSelector";

import { fetchTopProducts } from "store/reducers/product/ProductSlice";

import type { RootState } from "store/store";


const mapStateToProps = (state: RootState) => ({
    topProducts: getTopProducts(state)
});


const mapDispatchToProps = {
    fetchTopProducts
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TopProductsConnectedProps = ConnectedProps<typeof connector>;

export default connector(TopProducts);
