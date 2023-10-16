import { connect, ConnectedProps } from "react-redux";
import CreateCategoryForm from "./CreateCategoryForm";
import type { RootState } from "redux/store";
import { fetchToCreateCategory } from "redux/reducers/categories/categories.slice";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {
    fetchToCreateCategory
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IConnectedProps = ConnectedProps<typeof connector>;

export default connector(CreateCategoryForm);