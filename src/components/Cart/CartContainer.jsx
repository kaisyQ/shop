import Cart from "./Cart"

import { connect } from "react-redux"


import { getCartItems } from "../../redux/reducers/product/selector"

const mapStateToProps = (state) => ({
    items: getCartItems(state)
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)