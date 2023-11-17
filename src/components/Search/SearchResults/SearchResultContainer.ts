import SearchResult from "./SearchResult";
import { ConnectedProps, connect } from "react-redux";
import { getSearchLoading, getSearchProducts } from "store/reducers/search/SearchSelector";

import type { RootState } from "store/store";

const mapStateToProps = (state: RootState) => ({
    products: getSearchProducts(state),
    loading: getSearchLoading(state)
});

const connector = connect(mapStateToProps, null);

export type SearchResultConnectedProps = ConnectedProps<typeof connector>;

export default connector(SearchResult);
