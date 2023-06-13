import ProductsTable from "./ProductsTable";
import { ConnectedProps, connect } from "react-redux";

import { getShortProductItems } from "redux/reducers/product/selector";
import { removeProduct, fetchProducts, fetchToDeleteProduct } from "redux/reducers/product/productSlice";
import { RootState } from "redux/store";

const mapStateToProps  = (state: RootState) => ({
    products: getShortProductItems(state)
});

const mapDispatchToProps = {
    removeProduct, fetchProducts, fetchToDeleteProduct
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductConnectedProps = ConnectedProps<typeof connector>;

export default connector(ProductsTable);
