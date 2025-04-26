import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

var userIsRegistered = true;

//const currentTime = new Date().getHours();


function App() {

  return (
    <>
      <div className="container">
        <Login isRegistered={userIsRegistered}/>
        {/* {userIsRegistered ? <Login registered={userIsRegistered}/> : <Login registered={userIsRegistered}/>} */}
        {/* {currentTime < 12 ? <h1>Good Morning</h1> : <h1>Good Evening</h1>} */}
      </div>
    </>
  )
}

export default App
