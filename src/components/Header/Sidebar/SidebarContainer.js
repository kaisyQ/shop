import Sidebar from "./Sidebar"
import { connect } from "react-redux"

import { getIsAuth } from "../../../redux/reducers/auth-selector"

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})


const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)