import BlogAbout from "./BlogAbout"

import { connect } from "react-redux"

import { setCurrent as setCurrentBlogItem, createBlogItem } from "../../../redux/reducers/blog/reducer"
import { getCurrentBlogItem } from "../../../redux/reducers/blog/selector"


const mapStateToProps = (state) => ({
    current: getCurrentBlogItem(state)
})

const mapDispatchToProps = {
    setCurrentBlogItem, createBlogItem
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogAbout)
