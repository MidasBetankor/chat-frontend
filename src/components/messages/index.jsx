import React from 'react'

const Message = ({author, text}) => {
  return (
    <div className="message">
      <p>{author}</p>
      <p>{text}</p>
    </div>
  )
}

export {
  Message
}
