import { connect, ConnectedProps } from "react-redux";
import type { RootState } from "redux/store";
import UpdateCategoryApiContainer from "./UpdateCategoryFormApiContainer";
import { fetchCategoryBySlug } from "redux/reducers/categories/categories.slice";
import { setCurrent } from "redux/reducers/categories/categories.slice";
import { selectCurrentCategory } from "redux/reducers/categories/categories.selector";
import { fetchToUpdateCategory } from "redux/reducers/categories/categories.slice";

const mapStateToProps = (state: RootState) => ({
    current: selectCurrentCategory(state)
});

const mapDispatchToProps = {
    fetchCategoryBySlug, setCurrent, fetchToUpdateCategory
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IConnectedProps = ConnectedProps<typeof connector>;

export default connector(UpdateCategoryApiContainer);