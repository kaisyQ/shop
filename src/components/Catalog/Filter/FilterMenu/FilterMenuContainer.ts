import FilterMenuApiContainer from "./FilterMenuApiContainer";

import { connect } from 'react-redux';

import { ConnectedProps } from "react-redux";
import { selectProductCategories } from "store/reducers/category/CategorySelector";

import { fetchCategories } from "store/reducers/category/CategorySlice";
import type { RootState } from "store/store";


const mapStateToProps = (state: RootState) => ({
    categories: selectProductCategories(state)
})

const mapDispatchToProps = {
    fetchCategories
}


const connector = connect(mapStateToProps, mapDispatchToProps);

export type FilterMenuProps = ConnectedProps<typeof connector>;

export default connector(FilterMenuApiContainer);
