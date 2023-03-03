import Search from "./Search"

import { connect } from "react-redux"

import { setIsDark } from "../../../redux/reducers/styles-reducer"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    setIsDark
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)