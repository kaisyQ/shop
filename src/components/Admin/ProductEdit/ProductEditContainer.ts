import ProductEdit from "./ProductEdit";

import type { RootState } from "redux/store";

import { connect, ConnectedProps } from "react-redux";

import { getCurrentProduct } from "redux/reducers/product/selector";

import { 
    fetchToCreateProduct, setCurrent, fetchProductById, fetchToUpdateProduct
} from "redux/reducers/product/productSlice";

import { getIsAuth } from "redux/reducers/auth/selector";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";


import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps = (state: RootState) => ({
    product: getCurrentProduct(state),
    isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
    fetchToCreateProduct, setConfirmModalData, setCurrent,
    fetchProductById, fetchToUpdateProduct
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductEditConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(ProductEdit));

