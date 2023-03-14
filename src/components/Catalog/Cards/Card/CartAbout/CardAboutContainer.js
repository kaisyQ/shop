import CardAbout from "./CardAbout"
import { connect } from "react-redux"


const mapStateToProps = (state) => ({
    item: state.product.current
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CardAbout)