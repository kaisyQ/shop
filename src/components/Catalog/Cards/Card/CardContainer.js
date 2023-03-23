import Card from "./Card"

import { connect } from "react-redux"

import { addCartItem } from "../../../../redux/reducers/product/reducer"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    addCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)