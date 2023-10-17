import ProductEdit from "./ProductEdit";

import type { RootState } from "redux/store";

import { connect, ConnectedProps } from "react-redux";

import { getCurrentProduct } from "redux/reducers/product/selector";

import { 
    fetchToCreateProduct, setCurrent, fetchProductById, fetchToUpdateProduct
} from "redux/reducers/product/productSlice";

import { getIsAuth } from "redux/reducers/auth/selector";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";
import { fetchCategories } from "redux/reducers/categories/categories.slice";

import withAuthRedirect from "components/Hoc/Redirect";
import { selectProductCategories } from "redux/reducers/categories/categories.selector";

const mapStateToProps = (state: RootState) => ({
    product: getCurrentProduct(state),
    isAuth: getIsAuth(state),
    categories: selectProductCategories(state)
})

const mapDispatchToProps = {
    fetchToCreateProduct, setConfirmModalData, setCurrent,
    fetchProductById, fetchToUpdateProduct, fetchCategories
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductEditConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(ProductEdit));

