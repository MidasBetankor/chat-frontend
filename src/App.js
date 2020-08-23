import React from 'react'
import './App.css'

import { Message } from './components/messages'
import { Sidebar } from './components/sidebar'

function App() {
  const rooms = ['Hi', 'Hello there', 'General Kenobi!']
  const messages = [
    { author: 'John', message: 'I love bananas' },
    { author: 'Anna', message: 'Wow, me too!' },
  ]

  return (
    <div>
      <Sidebar rooms={rooms} />
      {messages.map((message, i) =>
        <Message
          key={i}
          author={message.author}
          text={message.message} />
        )}
    </div>
  );
}

export default App;
