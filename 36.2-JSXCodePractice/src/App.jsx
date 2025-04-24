import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Favorite Food</h1>
        <ul>
          <li>Pizza</li>
          <li>Hamburger</li>
          <li>Ice Cream</li>
        </ul>
      </div>
    </>
  );
};

export default App
