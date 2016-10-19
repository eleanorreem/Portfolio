import React from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header/index.js'
import Footer from './Footer/index.js'

const backgroundStyle = {
  background: 'rgb(0, 65, 111)',
  height: '100%',
  bottom: '0',
  color: 'white',
  fontFamily: '\'Lato\', sans-serif'
}

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      menuDisplay: 'none',
      timeStatus: 'work'
    }
  }
  render () {
    return (
      <Grid style={backgroundStyle}>
        <Header
          logoUrl='/assets/img/ipcortex-logo white.png'
          settingsIcon='/assets/img/settings-orange.png'
        />
        {this.props.children}
        <Footer />
      </Grid>
    )
  }
}
