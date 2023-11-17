import CartItem from "./CartItem";

import { connect, ConnectedProps } from "react-redux";

import { removeFromCart } from "store/reducers/cart/CartSlice";

const MapDispatchToProps = {
    removeFromCart
};

const connector = connect(null, MapDispatchToProps);

export type CartItemConnectedProps = ConnectedProps<typeof connector>;

export default connector(CartItem);
