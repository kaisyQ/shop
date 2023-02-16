import Users from "./Users"
import withAuthRedirect from "../../../Hoc/Redirect"

import { connect } from "react-redux"
import { getIsAuth } from "../../../../redux/reducers/auth-selector"
import { getUsers } from './../../../../redux/reducers/users-selector'
import { getUsersThunk as getAllUsers} from "../../../../redux/reducers/users-reducer"


const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    users: getUsers(state)
})


const mapDispatchToProps = {
    getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Users))