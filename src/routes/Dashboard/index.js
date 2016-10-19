import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import ProfileCircle from '../../components/ProfileCircle/index.js'
import StatusButton from '../../components/Button/statusButton.js'
import CollapsiblePanel from './CollapsiblePanel.js'

const colStyle = {
  textAlign: 'center',
}
const h2Style = {
  marginBottom: '0.6em',
  textAlign: 'center',
  fontStyle: 'light'
}
export default class Dashboard extends React.Component {
  render () {
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12} >
            <ProfileCircle profileImage={this.props.profileImage}/>
          </Col>
        </Row>
        <Row>
          <Col style={colStyle} xs={8} xsOffset={2}>
            <h2 style={h2Style}> John Smith </h2>
          </Col>
        </Row>
        <Row>
          <Col style={colStyle} xs={6} xsOffset={3}>
            <StatusButton {...this.props}/>
          </Col>
        </Row>
        <Col style={h2Style} xs={8} xsOffset={2}>
          <h2> Permissions </h2>
        </Col>
        <Row>
          <Col style={colStyle} xs={10} xsOffset={1}>
            <CollapsiblePanel {...this.props}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Dashboard.defaultProps = {
  profileImage: '/assets/img/profileSilouette.pngac7/projects',
  buttonLabels: [
    {
      label: 'work',
      active: true
    },
    {
      label: 'downtime',
      active: false
    }
  ],
  activeState: 'work',
  policySummary:
  {
    phone: {
      method: 'voice call',
      icon: './assets/img/phone-icon.png',
      groups:
      [
        { label: 'friends', url: './assets/img/friends-icon.png' },
        { label: 'family', url: './assets/img/family-icon.png' },
        { label: 'trusted collegues', url: './assets/img/trusted-collegues-icon.png' },
        { label: 'business aquaintances', url: './assets/img/aquaintances-icon.png' }
      ]

    },
    video: {
      method: 'video call',
      icon: './assets/img/video-icon.png',
      groups:
      [
        { label: 'friends', url: './assets/img/friends-icon.png' },
        { label: 'family', url: './assets/img/family-icon.png' },
        { label: 'trusted-collegues', url: './assets/img/friends-icon.png' }
      ]
    },
    instantMsg: {
      method: 'instant message',
      icon: './assets/img/instant-icon.png',
      groups:
      [
        { label: 'friends', url: './assets/img/friends-icon.png' },
        { label: 'family', url: './assets/img/family-icon.png' },
        { label: 'trusted-collegues', url: './assets/img/friends-icon.png' },
        { label: 'business aquaintances', url: './assets/img/aquaintances-icon.png' }
      ]
    },
    offlineMsg: {
      method: 'offline message',
      icon: './assets/img/offline-icon.png',
      groups:
      [
        { label: 'friends', url: './assets/img/friends-icon.png' },
        { label: 'family', url: './assets/img/family-icon.png' },
        { label: 'trusted-collegues', url: './assets/img/friends-icon.png' },
        { label: 'business aquaintances', url: './assets/img/aquaintances-icon.png' },
        { label: 'anyone', url: 'assets/img/anyone.png' }
      ]
    }
  }
}
