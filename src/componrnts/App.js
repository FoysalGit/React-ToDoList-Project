import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

    const [newItem , setItem] = useState("");
    const [listItems, setNewItem] = useState([]);

    function handleChange(e) {
        const value = e.target.value;
        setItem(value);
    }

    function handleClick() {
        setNewItem(prevItems => [...prevItems, newItem]);
        setItem("");
    } 
    
    function deleteItem(id) {
     setNewItem(prevItems => prevItems.filter((prevItem, index) => id !== index)); 
    }

    return( 
        <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={newItem} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((oneItem, index) => <ToDoItem key={index} id={index} onChecked={deleteItem} item= {oneItem}/>)}
          
        </ul>
      </div>
    </div>
  );
}

    

export default App;