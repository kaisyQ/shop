import SessionItem from "./SessionItem"

import { connect } from "react-redux"

import { deleteSessionThunk } from "../../../redux/reducers/users-reducer"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    deleteSessionThunk
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionItem)