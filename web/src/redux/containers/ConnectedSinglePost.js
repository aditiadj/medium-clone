import { connect } from "react-redux"

import SegmentSinglePost from "../../large/SegmentSinglePost"

import { fetchOnePost, getOnePost } from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  // console.log("mapStateToProps:", state)
  // console.log("ownProps", ownProps)

  return {
    data: state.posts.selected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchOnePost: id => {
    // console.log("id...", id)
    dispatch(fetchOnePost({ id }))
  },
  getOnePost: () => {
    console.log("getOnePost")
  },
  onTest: text => {
    console.log("onTest:", text)
  }
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedSinglePost = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentSinglePost)

export default ConnectedSinglePost
