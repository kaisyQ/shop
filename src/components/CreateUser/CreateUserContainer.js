import CreateUser from "./CreateUser"
import { connect } from "react-redux"

import { createUserThunk } from "../../redux/reducers/users/reducer"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    createUserThunk
}

export default connect (mapStateToProps, mapDispatchToProps)(CreateUser)