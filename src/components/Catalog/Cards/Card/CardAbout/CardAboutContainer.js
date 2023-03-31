import CardAbout from "./CardAbout"
import { connect } from "react-redux"

import { getCurrentProduct } from "../../../../../redux/reducers/product/selector"
import { addCartItem } from "./../../../../../redux/reducers/product/reducer"

const mapStateToProps = (state) => ({
    item: getCurrentProduct(state)
})

const mapDispatchToProps = {
    addCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CardAbout)