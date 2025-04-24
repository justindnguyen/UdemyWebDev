import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import pi, {doublePi, triplePi} from './Math.js'
import * as pi from './Math.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ul>
          <li>{pi.default}</li>
          <li>{pi.doublePi()}</li>
          <li>{pi.triplePi()}</li>
        </ul>
      </div>
    </>
  )
}

export default App
