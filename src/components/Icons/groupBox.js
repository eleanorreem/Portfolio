import React from 'react'

export default ({ icon, text }) => {
  return (
    <div>
      <img src={icon}/>
      <p>{text}</p>
    </div>
  )
}
