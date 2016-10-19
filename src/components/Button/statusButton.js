import React from 'react'
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap'

export default (props) => {
  return (
    <ButtonToolbar bsStyle={'default'}>
      <DropdownButton
        bsStyle={'default'}
        title={props.activeState}
        id={'dropdown-status'}
      >
        {props.buttonLabels.map((object, i) => {
          return (
            <MenuItem
              active={object.active}
              eventKey={i+1}
              key={i+1}
            >
              {object.label}
            </MenuItem>
          )
        })
      }
      </DropdownButton>
    </ButtonToolbar>
    )
}
