import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fName = "Justin";
  const lName = "Nguyen"
  const luckyNumber = Math.floor(Math.random()*10);

  return (
    <>
      <div>
        <h1>Hello {`${fName} ${lName}`}.</h1>
        <p>Your lucky number is {luckyNumber}.</p>
      </div>
    </>
  );
};

export default App
