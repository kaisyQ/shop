import BlogAbout from "./BlogAbout"

import { connect } from "react-redux"

import { getCurrentBlogItem } from "../../../redux/reducers/blog/selector"

const mapStateToProps = (state) => ({
    current: getCurrentBlogItem(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BlogAbout)
