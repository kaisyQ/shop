import AdminRouter from "./AdminRouter"

import { checkMeThunk as checkMe } from "../../redux/reducers/auth-reducer"
import { connect } from "react-redux"


const mapStateToProps = () => {
    return {

    }
} 

const mapDispatchToProps = {
    checkMe
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter)