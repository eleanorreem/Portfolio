import React from 'react'

export default class ProfileCircle extends React.Component {
  render () {
    const divStyle = {
      borderRadius: '200px',
      border: '4px solid rgb(255, 149, 49)',
      height: '200px',
      width: '200px',
      marginTop: '24px',
      background: 'rgb(184, 220, 229)',
      marginLeft: 'auto',
      marginRight: 'auto',
      overflow: 'hidden'
    }
    const imgStyle = {
      width: '100%'
    }
    return (
      <div style={divStyle}>
        <img style={imgStyle} src={this.props.profileImage}/>
      </div>
    )
  }
}
