import React from 'react'
import { connect } from 'react-redux';
class Entry extends React.Component {

  render() {
    return (
      <div className='entry-container'>
        <div className='forest-background'> Entry page</div>
        <div className='enter-container'><p>Enter</p></div>
        <img className='walking-man' src='https://s-media-cache-ak0.pinimg.com/originals/02/57/69/0257695066c4b8a38543aabfb0679a4e.gif'/>
      </div>
    )
  }
}





export default connect()(Entry);
