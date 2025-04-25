import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, multiply, subtract, divide } from './Calculator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ul>
          <li>{add(1, 2)}</li>
          <li>{multiply(2, 3)}</li>
          <li>{subtract(7, 2)}</li>
          <li>{divide(5, 2)}</li>
        </ul>
      </div>
    </>
  )
}

export default App
