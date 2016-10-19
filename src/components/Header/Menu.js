import React from 'react'
import { Link } from 'react-router'
import { Grid, Row } from 'react-bootstrap'


const rowStyle = {
  padding: '1em',
  borderTop: 'grey solid 1px',
  color: 'black'
}
const gridStyle={
  background: 'white',
  marginTop: '-51px',
  width: '43%',
  right: '19px',
  position: 'fixed',
  zIndex: '100'
}

export default ({ display, menuItems, toggleMenu }) => {
  return (
    <Grid style={{ display, ...gridStyle }}>
      {menuItems.map(item => {
        const link = item[0] === '/' ? '/' : '/' + item[0]
        return (
          <Link key={item[0]} to={link}>
            <Row
              onClick={toggleMenu}
              style={rowStyle}
              key={item[0] + '-li'}
            >
              <h4> {item[1]} </h4>
            </Row>
          </Link>
          )
      })}
    </Grid>
  )
}
