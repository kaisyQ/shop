import TopProducts from "./TopProducts";

import { ConnectedProps, connect } from "react-redux";

import { selectBestsellers } from "store/reducers/bestseller/BestsellerSelector";

import { fetchBestsellers  } from "store/reducers/bestseller/BestsellerSlice";

import type { RootState } from "store/store";


const mapStateToProps = (state: RootState) => ({
    bestsellers: selectBestsellers(state)
});


const mapDispatchToProps = {
    fetchBestsellers
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TopProductsConnectedProps = ConnectedProps<typeof connector>;

export default connector(TopProducts);
