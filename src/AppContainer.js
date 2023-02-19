import App from "./App"

import { connect } from "react-redux"

import { checkMeThunk as checkMe } from "./redux/reducers/auth-reducer"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    checkMe
}

export default connect(mapStateToProps, mapDispatchToProps)(App)