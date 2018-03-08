import { connect } from "react-redux"

import SegmentLatestPosts from "../../large/SegmentLatestPosts"

const mapStateToProps = (state, ownProps = {}) => {
  // console.log("mapStateToProps:", state)
  // console.log("ownProps", ownProps)

  return {
    data: state.posts.all
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: text => {
    console.log("onClick:", text)
  }
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedLatestPosts = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentLatestPosts)

export default ConnectedLatestPosts
