import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const customStyle = {
    color: 'red',
    fontSize: '20px',
    border: '1px solid black',
  };

  customStyle.color = 'blue';

  return (
    <>
      <div>
        <h1 style={customStyle}>Hello World!</h1>
      </div>
    </>
  )
}

export default App
