import React from 'react'

const divStyle = {
  bottom: '0',
  background: '-webkit-linear-gradient(rgba(0, 63, 111, 0), rgb(0, 63, 111))',
  background: '-o-linear-gradient(rgba(0, 63, 111, 0), rgb(0, 63, 111))',
  background: '-moz-linear-gradient(rgba(0, 63, 111, 0), rgb(0, 63, 111))',
  background: 'linear-gradient(rgba(0, 63, 111, 0), rgb(0, 63, 111))',
  height: '30px',
  width: '100%',
  position: 'fixed'
}
export default () => {
  return (
    <div style={divStyle} />
  )
}
