import React from 'react'
import { Room } from '../rooms'

import '../../index.css'

const Sidebar = ({rooms}) => {
  return (
    <div className="sidebar">
      {rooms.map((roomName, i) => <Room name={roomName} key={i}/>)}
    </div>
  )
}

export {
  Sidebar
}
