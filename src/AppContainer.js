import App from "./App"

import { connect } from "react-redux"

import { checkMeThunk as checkMe } from "./redux/reducers/auth-reducer"

import { getIsDark } from "./redux/reducers/styles-selector"


const mapStateToProps = (state) => ({
    isDark: getIsDark(state)
})

const mapDispatchToProps = {
    checkMe
}

export default connect(mapStateToProps, mapDispatchToProps)(App)