import Cart from "./Cart";

import { connect, ConnectedProps } from "react-redux";



import type { RootState } from "redux/store";

import { getCartItems, getSubtotalPrice } from "redux/reducers/cart/cartSelector";

const mapStateToProps = (state: RootState) => ({
    cartItems: getCartItems(state),
    subtotal: getSubtotalPrice(state)
});

const MapDispatchToProps = {};

const connector = connect(mapStateToProps, MapDispatchToProps);

export type CartConnectedProps = ConnectedProps<typeof connector>;

export default connector(Cart);
