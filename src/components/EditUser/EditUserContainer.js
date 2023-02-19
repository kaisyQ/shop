import EditUser from "./EditUser"

import { connect } from "react-redux"
import { getCurrentUser } from './../../redux/reducers/users-selector' 
import { getUserThunk as getUser } from './../../redux/reducers/users-reducer'

const mapStateToProps = (state) => ({
    user: getCurrentUser(state)
})

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)