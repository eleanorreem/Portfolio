import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Menu from './Menu.js'

const rowStyle = {
  marginTop: '15px'
}
const iconStyle = {
  width: '43px',
  marginLeft: '9px',
  marginTop: '6px'
}
const logoStyle = {
  width: '100%'
}
export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      menuDisplay: 'none'
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu () {
    const show = this.state.menuDisplay === 'none'
    console.log('toggled')
    this.setState(
      {
        menuDisplay: show ? '' : 'none'
      }
    )
  }
  render () {
    return (
      <div>
        <Row style={rowStyle}>
          <Col xs={6} xsOffset={3}>
            <img style={logoStyle} src={this.props.logoUrl}/>
          </Col>
          <Col xs={1}>
            <img
              style={iconStyle}
              onClick={this.toggleMenu}
              src={this.props.settingsIcon}
            />
          </Col>
        </Row>
        <Menu
          menuItems={this.props.menuItems}
          toggleMenu={this.toggleMenu}
          display={this.state.menuDisplay}
        />
      </div>
    )
  }
}

Header.defaultProps = {
  menuItems: [
    [ '/', 'Home' ],
    [ 'profile', 'Profile' ],
    [ 'group-summary', 'Group Policies' ],
    [ 'time-policy', 'Time Policies' ]
  ]
}
