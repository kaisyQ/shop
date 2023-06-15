import ProductEdit from "./ProductEdit";

import { RootState } from "redux/store";

import { connect, ConnectedProps } from "react-redux";

import { getCurrentProduct } from "redux/reducers/product/selector";

import { fetchToCreateProduct } from "redux/reducers/product/productSlice";
import { getIsAuth } from "redux/reducers/auth/selector";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps = (state: RootState) => ({
    product: getCurrentProduct(state),
    isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
    fetchToCreateProduct
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductEditConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(ProductEdit));

