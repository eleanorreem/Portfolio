import React from 'react'
import { connect } from 'react-redux';
class Entry extends React.Component {

  render() {
    return (
      <div className='entry-container'>
        <div className='forest-background'> Entry page</div>
        <div className='enter-container'><p>Enter</p></div>
        <img className='walking-man' src='http://ppt.wz51z.com/PMP2/People.To.School/animations/people_s/stick_people/stickman_walking_dog_hb.gif'/>
      </div>
    )
  }
}





export default connect()(Entry);
