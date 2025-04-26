import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [HeadingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleOver() {
    setIsMouseOver(true);
  }

  function handleOut() {
    setIsMouseOver(false);
  }


  return (
    <>
      <div className="container">
        <h1>{HeadingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button style={{backgroundColor: isMouseOver ? "black" : "white"}} onClick={handleClick} onMouseOver={handleOver} onMouseOut={handleOut}>
          Submit
        </button>
      </div>
    </>
  )
}

export default App
