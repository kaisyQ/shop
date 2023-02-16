import AdminHeader from "./AdminHeader"
import { connect } from "react-redux"
import { getRoleId } from "../../../../redux/reducers/auth-selector"


const mapStateToProps = (state) => ({
    roleId: getRoleId(state)
})


const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader)