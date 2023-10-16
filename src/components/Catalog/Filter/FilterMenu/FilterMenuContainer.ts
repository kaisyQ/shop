import FilterMenuApiContainer from "./FilterMenuApiContainer";

import { connect } from 'react-redux';

import { ConnectedProps } from "react-redux";
import { selectProductCategories } from "redux/reducers/categories/categories.selector";

import { fetchCategories } from "redux/reducers/categories/categories.slice";
import type { RootState } from "redux/store";


const mapStateToProps = (state: RootState) => ({
    categories: selectProductCategories(state)
})

const mapDispatchToProps = {
    fetchCategories
}


const connector = connect(mapStateToProps, mapDispatchToProps);

export type FilterMenuProps = ConnectedProps<typeof connector>;

export default connector(FilterMenuApiContainer);
