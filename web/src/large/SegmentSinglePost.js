import React from "react"
// import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageText from "../medium/PageText"

class SegmentSinglePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      data: {}
    }

    this.onTest = props.onTest.bind(this)

    // console.log("data in SegmentSinglePost", data)
    // console.log("request for post", post.id)
  }

  // TODO
  componentWillMount() {
    this.props.fetchOnePost(this.state.id)

    console.log("this.props.data...", this.props.data)

    this.setState({ data: this.props.data })

    console.log("this.state...", this.state)
  }

  componentDidMount() {
    console.log("this.props.data...", this.props.data)
  }

  render() {
    return (
      <Row id="SegmentSinglePost" className="center" xs={12} md={8}>
        <Col>
          <span onClick={() => this.onTest()}>HELLO</span>
        </Col>
        {/* <Col xs={12} md={8}>
          <PageTitle>
            [{post.id}] {post.title}
          </PageTitle>
        </Col>
        <Col xs={12} md={8}>
          <PageText>{post.content}</PageText>
        </Col> */}
      </Row>
    )
  }
}

export default SegmentSinglePost
