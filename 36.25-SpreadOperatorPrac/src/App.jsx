import { useState } from 'react'

function App() {
  const [listItem, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  function handleAdd() {
    setList((prevList) => {
      return [...prevList, listItem];
    })
    setItem("");
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input
            placeholder="Add a new item"
            onChange={handleChange} 
            type="text" 
            name="item"
            value={listItem}
          />
          <button onClick={handleAdd}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
