import { connect, ConnectedProps } from "react-redux";
import type { RootState } from "redux/store";
import { selectProductCategories } from "redux/reducers/categories/categories.selector";
import { fetchCategories, fetchToDeleteCategory } from "redux/reducers/categories/categories.slice";
import CategoryTableApiContainer from "./CategoriesTableApiContainer";

const mapStateToProps = (state: RootState) => ({
    categories: selectProductCategories(state)
});

const mapDispatchToProps = {
    fetchCategories, fetchToDeleteCategory
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IConnectedProps = ConnectedProps<typeof connector>;

export default connector(CategoryTableApiContainer);