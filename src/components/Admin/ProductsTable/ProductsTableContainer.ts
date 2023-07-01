import ProductsTable from "./ProductsTable";

import { ConnectedProps, connect } from "react-redux";

import { 
    getFilteredByTop,
    getFilteredProducts,
    getProductsLoading as getLoading, 
    getProductSearch, 
    getProductSelectorType, 
} from "redux/reducers/product/selector";

import { fetchProducts, fetchToDeleteProduct } from "redux/reducers/product/productSlice";

import type { RootState } from "redux/store";

import { getIsAuth } from "redux/reducers/auth/selector";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { setSelectorType, setSearchValue, setFilteredByTop } from "redux/reducers/product/productSlice";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps  = (state: RootState) => ({
    products: getFilteredProducts(state),
    isAuth: getIsAuth(state),
    loading: getLoading(state),
    search: getProductSearch(state),
    select: getProductSelectorType(state),
    filteredByTop: getFilteredByTop(state)
});

const mapDispatchToProps = {
    fetchProducts, fetchToDeleteProduct, setConfirmModalData,
    setSelectorType, setSearchValue, setFilteredByTop
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(ProductsTable));
