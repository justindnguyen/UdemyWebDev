import React from "react";
import ReactDOM from "react-dom/client";
//import './index.css';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);