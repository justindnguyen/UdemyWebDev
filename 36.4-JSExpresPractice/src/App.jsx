import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const YOURNAME = "Justin Nguyen";
  const CURRENTYEAR = new Date().getFullYear();

  return (
    <>
      <div>
        <p>
          Created by {YOURNAME}.
        </p>
        <p>
          Copyright {CURRENTYEAR}.
        </p>
      </div>
    </>
  );
};

export default App
