import CardAbout from "./CardAbout"
import { connect } from "react-redux"

import { getCurrentProduct } from "../../../../../redux/reducers/product/selector"

const mapStateToProps = (state) => ({
    item: getCurrentProduct(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CardAbout)