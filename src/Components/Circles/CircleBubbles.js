import React from 'react'

function CircleBubbles(props) {
  const content = props.bubbles.map((bubble, index) =>
    <li key={"bubble-"+index} className="list-inline-item">
      <span>{bubble}</span>
    </li>
  )
  return (
    content
  )
}

export default CircleBubbles