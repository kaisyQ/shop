import App from "./App"

import { connect } from "react-redux"


import { checkMeThunk as checkMe } from "./redux/reducers/auth/authSlice"

import { getIsDark } from "./redux/reducers/styles/selector"
import { setIsDark } from "./redux/reducers/styles/stylesSlice.ts"



const mapStateToProps = (state) => ({
    isDark: getIsDark(state)
})

const mapDispatchToProps = {
    checkMe,
    setIsDark
}

export default connect(mapStateToProps, mapDispatchToProps)(App)