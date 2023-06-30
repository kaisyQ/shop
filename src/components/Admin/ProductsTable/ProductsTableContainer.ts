import ProductsTable from "./ProductsTable";

import { ConnectedProps, connect } from "react-redux";

import { 
    getFilteredProducts,
    getProductsLoading as getLoading, 
    getProductSearch, 
    getProductSelectorType, 
    getShortProductItems } from "redux/reducers/product/selector";
import { fetchProducts, fetchToDeleteProduct } from "redux/reducers/product/productSlice";
import type { RootState } from "redux/store";

import { getIsAuth } from "redux/reducers/auth/selector";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { setSelectorType, setSearchValue } from "redux/reducers/product/productSlice";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps  = (state: RootState) => ({
    products: getFilteredProducts(state),
    isAuth: getIsAuth(state),
    loading: getLoading(state),
    search: getProductSearch(state),
    select: getProductSelectorType(state)
});

const mapDispatchToProps = {
    fetchProducts, fetchToDeleteProduct, setConfirmModalData,
    setSelectorType, setSearchValue
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(ProductsTable));
