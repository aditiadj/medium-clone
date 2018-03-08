import React from "react"
import { default as Layout } from "../templates/LayoutSingle"

import ConnectedSinglePost from "../redux/containers/ConnectedSinglePost"

const Post = ({ match }) => {
  return (
    <Layout>
      <ConnectedSinglePost match={match} />
    </Layout>
  )
}

export default Post
