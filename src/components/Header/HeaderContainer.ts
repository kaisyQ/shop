import Header from "./Header";
import { ConnectedProps, connect } from "react-redux";

import { getIsDark } from "../../store/reducers/style/StyleSelector";
import { setIsDark } from "../../store/reducers/style/StyleSlice";
import { getCartItemCount } from "store/reducers/cart/CartSelector";
import { RootState } from "store/store";

const mapStateToProps = (state: RootState) => ({
    isDark: getIsDark(state),
    cartItemCount: getCartItemCount(state)
})

const mapDispatchToProps = {
    setIsDark
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export type HeaderConnectedProps = ConnectedProps<typeof connector>;


export default connector(Header);
