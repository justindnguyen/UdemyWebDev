import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

var isLoggedIn = false;

const currentTime = new Date().getHours();


function App() {

  return (
    <>
      <div className="container">
        {isLoggedIn ? <h1>Hello</h1> : <Login />}
        {/* {currentTime < 12 ? <h1>Good Morning</h1> : <h1>Good Evening</h1>} */}
      </div>
    </>
  )
}

export default App
