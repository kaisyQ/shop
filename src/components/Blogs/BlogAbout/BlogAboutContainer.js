import BlogAbout from "./BlogAbout"

import { connect } from "react-redux"

import { setCurrent as setCurrentBlogItem } from "../../../redux/reducers/blog/reducer"
import { getCurrentBlogItem } from "../../../redux/reducers/blog/selector"

const mapStateToProps = (state) => ({
    current: getCurrentBlogItem(state)
})

const mapDispatchToProps = {
    setCurrentBlogItem
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogAbout)
