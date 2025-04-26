import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var isDone = false;

function strike() {
  isDone = true;
}

function unstrike() {
  isDone = false;
}

const strikeThrough = { textDecoration: "line-through" };



function App() {
  return (
    <>
      <div>
        <p style = {isDone ? strikeThrough : null}>
          Buy milk
        </p>
        <button onClick={strike}>Strike</button>
        <button onClick={unstrike}>Unstrike</button>
      </div>
    </>
  )
}

export default App
