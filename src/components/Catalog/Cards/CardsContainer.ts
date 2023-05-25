import Cards from "./Cards";

import { ConnectedProps, connect } from "react-redux";

import { getProductItems as getItems } from "../../../redux/reducers/product/selector";

import type { RootState } from "redux/store";

import { IProduct } from "types/types";

interface IMapStateToPropsType {
    items: IProduct[]
}

const mapStateToProps = (state: RootState) : IMapStateToPropsType => ({
    items: getItems(state)
})

const connector = connect(mapStateToProps, null);

export type CardsConnectedPropsType = ConnectedProps<typeof connector>

export default connector(Cards);