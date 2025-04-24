import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const img = "https://picsum.photos/200"

  return (
    <>
      <div>
        <h1 className="heading" contentEditable="true" spellcheck="false">My Favorite Foods</h1>
        <div>
          <img className="food-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMocj5C3ODdn5xp176wslw4SlQPo9mHqT2Lzyo3UPocdPZcAyTTaSFSuM6AnK4GDH0lH-4zJyVKbH4WW-rxiFs4VOIEpXp4FxFuQUWZtwBu525xoctG9Frk7WCHIyZVTt26KRdTQb8Dq4/s1600/comthitnuong1.jpg" alt="Com Thit Nuong" />
          <img className="food-img" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Ph%E1%BB%9F_b%C3%B2_%2839425047901%29.jpg"  alt="Pho Bo" />
          <img className="food-img" src="https://www.columbusmonthly.com/gcdn/authoring/authoring-images/2024/05/09/NCOM/73633682007-cm-korean-bbq-tj-04.jpg" alt="Korean BBQ" />
          <img src={img + "?grayscale"} alt="Random Image" />
        </div>
      </div>
    </>
  )
}

export default App
