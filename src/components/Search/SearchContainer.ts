import Search from "./Search";
import { ConnectedProps, connect } from "react-redux";

import { fetchSearch, setSearchProducts } from "redux/reducers/search/searchSlice";

const mapDispatchToProps = {
    fetchSearch, setSearchProducts
};

const connector = connect(null, mapDispatchToProps);

export type SearchConnectedProps = ConnectedProps<typeof connector>;

export default connector(Search);

