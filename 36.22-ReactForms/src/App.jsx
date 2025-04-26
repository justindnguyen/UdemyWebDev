import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function submitClicked() {
    setHeading(name);
  }

  return (
    <>
      <div className="container">
        <h1>Hello {headingText}</h1>
        <input 
          onChange={handleChange}
          type="text" 
          placeholder="What's your name?" 
          value={name}
        />
        <button onClick={submitClicked}>Submit</button>
      </div>
    </>
  )
}

export default App
