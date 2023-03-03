import Header from "./Header"
import { connect } from "react-redux"

import { signOutThunk as signOut } from "../../redux/reducers/auth-reducer"
import { getIsAuth } from "../../redux/reducers/auth-selector"

import { setIsDark } from "../../redux/reducers/styles-reducer"

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
    signOut,
    setIsDark
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
