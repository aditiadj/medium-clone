import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import SmallPost from "../medium/SmallPost"
import SectionTitle from "../small/SectionTitle"

const SegmentLatestPosts = ({ data }) => {
  return (
    <Row id="SegmentLatestPosts" xs={8}>
      <Col xs={12}>
        <Link to="/posts">
          <SectionTitle>Latest posts for you</SectionTitle>
        </Link>
      </Col>
      {data.map((post, index) => {
        return (
          <Col key={index} xs={12} md={8} lg={6}>
            <SmallPost post={post} />
          </Col>
        )
      })}
    </Row>
  )
}

export default SegmentLatestPosts
