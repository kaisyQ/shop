import Cart from "./Cart"

import { connect } from "react-redux"


import { getCartItems } from "../../redux/reducers/product/selector"
import { getTotalPrice } from "../../redux/reducers/product/selector"

const mapStateToProps = (state) => ({
    items: getCartItems(state),
    totalPrice: getTotalPrice(state)
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)