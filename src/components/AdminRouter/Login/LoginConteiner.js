import Login from "./Login"

import { connect } from "react-redux"
import { signInThunk as signIn } from "../../../redux/reducers/auth-reducer"
import { getIsAuth } from "../../../redux/reducers/auth-selector"


const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state)
    }
}

const mapDispatchToProps = {
    signIn
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)