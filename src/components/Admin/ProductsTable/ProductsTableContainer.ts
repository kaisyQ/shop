import ProductsTable from "./ProductsTable";
import { ConnectedProps, connect } from "react-redux";

import { getShortProductItems } from "redux/reducers/product/selector";
import { removeProduct, addProduct } from "redux/reducers/product/productSlice";
import { RootState } from "redux/store";

const mapStateToProps  = (state: RootState) => ({
    products: getShortProductItems(state)
});

const mapDispatchToProps = {
    removeProduct, addProduct
};

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductConnectedProps = ConnectedProps<typeof connector>;

export default connector(ProductsTable);
