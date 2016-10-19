import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Profile extends React.Component {
  render () {
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <p>Profile</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
