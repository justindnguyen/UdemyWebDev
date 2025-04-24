import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const CURRENT_TIME = new Date().getHours();
  console.log(CURRENT_TIME);

  let message = "";
  const customStyle = {
    color: "white"
  };
  if (CURRENT_TIME < 12) {
    message = "Good Morning";
    customStyle.color = "red";
  } else if (CURRENT_TIME < 18) {
    message = "Good Afternoon";
    customStyle.color = "green";
  } else {
    message = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <>
      <div>
        <h1 className='heading' style={customStyle}>{message}</h1>
      </div>
    </>
  );
};

export default App
