import CardAbout from "./CardAbout";

import { ConnectedProps, connect } from "react-redux";

import { RootState } from "redux/store";

import { getCurrentProduct } from "../../../../../redux/reducers/product/selector";

import { IProduct } from "types/types";


interface IMapStateToPropsType {
    item: IProduct
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    item: getCurrentProduct(state)
});

const connector = connect(mapStateToProps, null);

export type CardAboutConnectedProps = ConnectedProps<typeof connector>;

export default connector(CardAbout);