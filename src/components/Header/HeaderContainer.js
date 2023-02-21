import Header from "./Header"
import { connect } from "react-redux"

import { signOutThunk as signOut } from "../../redux/reducers/auth-reducer"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
