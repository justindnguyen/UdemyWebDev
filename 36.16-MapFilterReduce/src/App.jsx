import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import emojipedia from './emojipedia'
import Meaning from './Meaning'

const newEmojipedia = emojipedia.map( (emoji) => {
  return emoji.meaning.substring(0, 100);
});
console.log(newEmojipedia);

function App() {
  return (
    <>
      <div>
        {emojipedia.map((emoji) => (
          <Meaning
            key={emoji.id}
            meaning={(emoji.meaning.substring(0, 100))}
          />
        ))}
      </div>
    </>
  )
}

export default App
