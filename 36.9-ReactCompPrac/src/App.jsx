import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <div>
        <Heading />
      </div>
    </>
  )
}

export default App
