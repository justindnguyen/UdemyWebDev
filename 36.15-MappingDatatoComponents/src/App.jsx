import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import emojipedia from './components/emojipedia'

function emojiCard(emoji) {
  return (
    <Card 
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <>
      <div>
        <h1>
            <span>emojipedia</span>
        </h1>
        <dl className="dictionary">
          {emojipedia.map((emoji) => (
            emojiCard(emoji)
          ))}
        </dl>
      </div>
    </>
  )
}

export default App
