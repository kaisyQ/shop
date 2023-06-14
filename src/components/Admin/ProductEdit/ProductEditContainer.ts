import { RootState } from "redux/store";
import ProductEdit from "./ProductEdit";

import { connect, ConnectedProps } from "react-redux";

import { getCurrentProduct } from "redux/reducers/product/selector";

import { fetchToCreateProduct } from "redux/reducers/product/productSlice";

const mapStateToProps = (state: RootState) => ({
    product: getCurrentProduct(state)
})

const mapDispatchToProps = {
    fetchToCreateProduct
};


const connector = connect(mapStateToProps, mapDispatchToProps);

export type IProductEditConnectedProps = ConnectedProps<typeof connector>;

export default connector(ProductEdit);

