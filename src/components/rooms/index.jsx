import React from 'react'
import './styles.css'

const Room = ({name}) => {
  return (
    <div className="clickable">{name}</div>
  );
}

export {
  Room
}
