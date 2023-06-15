import ProductsTable from "./ProductsTable";

import { ConnectedProps, connect } from "react-redux";

import { getShortProductItems } from "redux/reducers/product/selector";
import { fetchProducts, fetchToDeleteProduct } from "redux/reducers/product/productSlice";
import { RootState } from "redux/store";
import { getIsAuth } from "redux/reducers/auth/selector";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps  = (state: RootState) => ({
    products: getShortProductItems(state),
    isAuth: getIsAuth(state)
});

const mapDispatchToProps = {
    fetchProducts, fetchToDeleteProduct
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(ProductsTable));
