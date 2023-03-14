import Cards from "./Cards"

import { connect } from "react-redux"

import { getProductItems as getItems } from "../../../redux/reducers/product/selector"

const mapStateToProps = (state) => ({
    items: getItems(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)