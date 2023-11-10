import Search from "./Search";
import { ConnectedProps, connect } from "react-redux";

import { fetchSearch, setSearchProducts } from "store/reducers/search/SearchSlice";

const mapDispatchToProps = {
    fetchSearch, setSearchProducts
};

const connector = connect(null, mapDispatchToProps);

export type SearchConnectedProps = ConnectedProps<typeof connector>;

export default connector(Search);

