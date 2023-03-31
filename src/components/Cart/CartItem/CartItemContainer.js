import CartItem from "./CartItem"

import { connect } from "react-redux"

import { removeCartItem } from "../../../redux/reducers/product/reducer"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { removeCartItem }

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)