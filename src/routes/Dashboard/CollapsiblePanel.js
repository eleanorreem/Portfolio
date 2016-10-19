import React from 'react'
import { Accordion, Panel, Row, Col } from 'react-bootstrap'
const pStyle = {
  float: 'left'
}
export default ({ policySummary }) => {
  return (
    <Accordion>
      {Object.keys(policySummary).map((key, i) => {
        const { icon, groups, method } = policySummary[key]
        const eventKey = i+1
        const panelHeader =
            (<Row>
              <Col xs={2}>
                <img src={icon}/>
              </Col>
              <Col xs={10}>
                <p>{method}</p>
              </Col>
            </Row>)

        return (
          <Panel
            key={i}
            header={panelHeader}
            eventKey={eventKey}
          >
            <Row>
              {groups.map((group) => {
                return (
                  <div>
                    <img src={group.url}/>
                    <p style={pStyle}>{group.label}</p>
                  </div>
                  )
              })}
            </Row>
          </Panel>
          )
      })}
    </Accordion>
    )
}
