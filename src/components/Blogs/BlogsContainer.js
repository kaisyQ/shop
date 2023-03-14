import Blog from "./Blog"

import { connect } from "react-redux"

import { getBlogItems } from './../../redux/reducers/blog/selector'

const mapStateToProps = (state) => ({
    blogs: getBlogItems(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)