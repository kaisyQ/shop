import SearchResult from "./SearchResult";
import { ConnectedProps, connect } from "react-redux";
import { getSearchLoading, getSearchProducts } from "redux/reducers/search/selector";

import type { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    products: getSearchProducts(state),
    loading: getSearchLoading(state)
});

const connector = connect(mapStateToProps, null);

export type SearchResultConnectedProps = ConnectedProps<typeof connector>;

export default connector(SearchResult);
