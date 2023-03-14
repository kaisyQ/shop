import Sidebar from "./Sidebar"
import { connect } from "react-redux"

import { getIsAuth } from "../../../redux/reducers/auth/selector"

import { setIsDark } from "../../../redux/reducers/styles/reducer"

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})


const mapDispatchToProps = {
    setIsDark
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)